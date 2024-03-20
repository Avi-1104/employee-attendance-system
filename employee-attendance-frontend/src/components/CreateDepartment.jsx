
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import departmentService from "../service/department.service";
export const CreateDepartment = () => {
  const [newDepartment, setNewDepartment] = useState({
    name: "",
  });
  const [msg, setMsg] = useState("");
  const navigation = useNavigate();

  const handleInputChange = (e) => {
    setNewDepartment({ ...newDepartment, [e.target.name]: e.target.value });
  };

  const handleCreateDepartment = (e) => {
    e.preventDefault();
    departmentService
      .createDepartment(newDepartment)
      .then((res) => {
        console.log("Department Created Successfully");
        setMsg("Department Created Successfully");
        setNewDepartment({ name: "" });
        navigation("/departmentList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={containerStyle} >
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Create Department</h2>
        <form onSubmit={handleCreateDepartment}>
          <div style={inputContainerStyle}>
            <label htmlFor="name" style={labelStyle}>
              Name:
            </label>
            <input
              type="text"
              style={inputStyle}
              id="name"
              name="name"
              value={newDepartment.name}
              onChange={handleInputChange}
              maxLength={50} // Set maximum length to 50 characters
              size={30} // Set size of input field to 30 characters wide
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Create Department
          </button>
        </form>
        {msg && <div style={msgStyle}>{msg}</div>}
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  // marginBottom:"100vh"
};

const formContainerStyle = {
  width: "400px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  fontSize: "1.5rem",
  textAlign: "center",
  marginBottom: "20px",
};

const inputContainerStyle = {
  marginBottom: "15px",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
};

const msgStyle = {
  marginTop: "15px",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#28a745",
  color: "#fff",
};