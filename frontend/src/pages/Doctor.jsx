import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import CommonTable from "../components/CommonTableTemplate";
import CommonDialog from "../components/CommonDialog";
import PageLayout from "../components/PageLayout";

const doctorTable = () => {
  const [doctorData, setdoctorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, test_name: "", doctor: "" });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("test_name");

  const columns = [
    { id: "name", label: "Doctor Name" },
    { id: "contact", label: "Contact" },
    { id: "degree", label: "Degree" },
    { id: "percentage", label: "Percentage" },
  ];

  const fields = [
    { id: "name", label: "Doctor Name" },
    { id: "contact", label: "Contact" },
    { id: "degree", label: "Degree" },
    { id: "percentage", label: "Percentage" },
  ];

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setFilteredData(
      doctorData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [searchTerm, doctorData]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/doctor-data/");
    console.log(response.data);
    setdoctorData(response.data);
    setFilteredData(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/doctor-data/${id}`);
    loadData();
  };

  const handleOpen = (data = null) => {
    setFormData(data || { id: null, test_name: "", doctor: "" });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (formData.id) {
      await axios.put(`http://localhost:8000/doctor-data/${formData.id}`, formData);
    } else {
      await axios.post("http://localhost:8000/doctor-data/", formData);
    }
    loadData();
    handleClose();
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <PageLayout
        title="Doctor List"
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onAddClick={() => handleOpen()}
      />
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
      <CommonDialog
        open={open}
        onClose={handleClose}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        title={formData.id ? "Edit doctor Data" : "Add New doctor Data"}
        fields={fields}
      />
    </Container>
  );
};

export default doctorTable;