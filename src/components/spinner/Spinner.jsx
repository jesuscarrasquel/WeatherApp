import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./spinner.css";

export default function Spinner() {
  return (
    <div className="spinner">
      <Box sx={{ display: "flex" }}>
        <CircularProgress
          className="loadingIcon"
          sx={{ height: "80px !important", width: "80px !important" }}
        />
      </Box>
    </div>
  );
}
