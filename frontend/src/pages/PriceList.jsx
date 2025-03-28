import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import CommonTable from "../components/CommonTableTemplate";
import CommonDialog from "../components/CommonDialog";
import PageLayout from "../components/PageLayout";

const PriceList = () => {
  const [testData, setTestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]); // State for categories
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    test_name: "",
    category: "",
    customer_price: "",
    pathvision_b2b: "",
    gd_b2b: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("test_name");

  // Define columns for the table
  const columns = [
    { id: "test_name", label: "Test Name" },
    { id: "category", label: "Category" },
    { id: "customer_price", label: "Customer Price" },
    { id: "pathvision_b2b", label: "Pathvision B2B" },
    { id: "gd_b2b", label: "GD B2B" },
  ];

  // Define fields for the dialog form
  const fields = [
    { id: "test_name", label: "Test Name", type: "select", options: categories.map((cat) => ({ value: cat.test_name, label: cat.test_name }))},
    { id: "category", label: "Category", type: "select", options: categories.map((cat) => ({ value: cat.category, label: cat.category })), },
    { id: "customer_price", label: "Customer Price", type: "number" },
    { id: "pathvision_b2b", label: "Pathvision B2B", type: "number" },
    { id: "gd_b2b", label: "GD B2B", type: "number" },
  ];


  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("http://localhost:8000/category-data/");
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  // Fetch data from the API
  useEffect(() => {
    loadData();
  }, []);

  // Filter data based on search term
  useEffect(() => {
    setFilteredData(
      testData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [searchTerm, testData]);

  // Load data from the API
  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/test-data/");
    setTestData(response.data);
    setFilteredData(response.data);
  };

  // Handle delete action
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/test-data/${id}`);
    loadData();
  };

  // Open dialog for adding/editing data
  const handleOpen = (data = null) => {
    setFormData(data || { id: null, test_name: "", category: "", customer_price: "", pathvision_b2b: "", gd_b2b: "" });
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => setOpen(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (formData.id) {
      await axios.put(`http://localhost:8000/test-data/${formData.id}`, formData);
    } else {
      await axios.post("http://localhost:8000/test-data/", formData);
    }
    loadData();
    handleClose();
  };

  // Handle sorting
  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Handle pagination
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Page Layout (Title, Search, Add Button) */}
      <PageLayout
        title="Price List"
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onAddClick={() => handleOpen()}
      />

      {/* Common Table */}
      <CommonTable
        columns={columns}
        data={filteredData}
        order={order}
        orderBy={orderBy}
        onSort={handleSort}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        onEdit={handleOpen}
        onDelete={handleDelete}
      />

      {/* Common Dialog for Add/Edit */}
      <CommonDialog
        open={open}
        onClose={handleClose}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        title={formData.id ? "Edit Test Data" : "Add New Test Data"}
        fields={fields}
      />
    </Container>
  );
};

export default PriceList;