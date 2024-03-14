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
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="form-container">
        <h2 className="text-center">Create Department</h2>
        <form onSubmit={handleCreateDepartment}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newDepartment.name}
              onChange={handleInputChange}
              maxLength={50} // Set maximum length to 50 characters
              size={30} // Set size of input field to 30 characters wide
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Department
          </button>
        </form>
        {msg && <div className="mt-3 alert alert-success">{msg}</div>}
      </div>
    </div>
  );
};
