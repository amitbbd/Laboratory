import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const CommonDialog = ({
  open,
  onClose,
  formData,
  onChange,
  onSubmit,
  title,
  fields,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ backgroundColor: "#2E3B55", color: "white" }}>
        {title}
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        {fields.map((field) => (
          <FormControl fullWidth key={field.id} sx={{ mb: 2 }}>
            {field.type === "select" ? (
              <>
                <InputLabel>{field.label}</InputLabel>
                <Select
                  name={field.id}
                  value={formData[field.id]}
                  onChange={onChange}
                  label={field.label}
                >
                  {field.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </>
            ) : (
              <TextField
                margin="dense"
                label={field.label}
                type={field.type || "text"}
                fullWidth
                name={field.id}
                value={formData[field.id]}
                onChange={onChange}
              />
            )}
          </FormControl>
        ))}
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary" variant="contained">
          {formData.id ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;