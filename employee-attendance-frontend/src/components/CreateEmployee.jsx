/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import employeeService from '../service/employee.service';

export const CreateEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    department: '',
    present: true,
  });
  const [msg, setMsg] = useState('');
  const navigation = useNavigate();

  const handleInputChange = e => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleCreateEmployee = e => {
    e.preventDefault();
    employeeService
      .createEmployee(newEmployee)
      .then(res => {
        console.log('Employee Created Successfully');
        setMsg('Employee Created Successfully');
        setNewEmployee({
          name: '',
          department: '',
          present: true,
        });
        navigation('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="form-container">
        <h2 className="text-center">Create Employee</h2>
        <form onSubmit={handleCreateEmployee}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
              maxLength={50} // Set maximum length to 50 characters
              size={30} // Set size of input field to 30 characters wide
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">Department:</label>
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              value={newEmployee.department}
              onChange={handleInputChange}
              maxLength={50} // Set maximum length to 50 characters
              size={30} // Set size of input field to 30 characters wide
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="present"
              name="present"
              checked={newEmployee.present}
              onChange={() => setNewEmployee({ ...newEmployee, present: !newEmployee.present })}
            />
            <label className="form-check-label" htmlFor="present">Present</label>
          </div>
          <button type="submit" className="btn btn-primary">Create Employee</button>
        </form>
        {msg && <div className="mt-3 alert alert-success">{msg}</div>}
      </div>
    </div>
  );
};*/

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeService from "../service/employee.service";
import departmentService from "../service/department.service";

export const CreateEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: null,
    mobileNumber: "",
    email: "",
    present: true,
  });
  const [departmentList, setDepartmentList] = useState([]);
  const [msg, setMsg] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    departmentService
      .getAllDepartments()
      .then((res) => {
        setDepartmentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "department") {
      const selectedDepartment = departmentList.find((dep) => 
        dep.id == value
      );
      console.log(selectedDepartment)
      setNewEmployee({ ...newEmployee, department: selectedDepartment });
    } else {
      setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
    }
  };

  const handleCreateEmployee = (e) => {
    e.preventDefault();
    employeeService
      .createEmployee(newEmployee)
      .then((res) => {
        console.log("Employee Created Successfully");
        setMsg("Employee Created Successfully");
        setNewEmployee({
          name: "",
          department: "",
          mobileNumber: "",
          email: "",
          present: true,
        });
        navigation("/employeeList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="form-container">
        <h2 className="text-center">Create Employee</h2>
        <form onSubmit={handleCreateEmployee}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
              maxLength={50} // Set maximum length to 50 characters
              size={30} // Set size of input field to 30 characters wide
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Department:
            </label>
            <select
              id="department"
              name='department'
              value={newEmployee.department ? newEmployee.department.id : ""}
              onChange={(e) => handleInputChange(e)}
              required
            >
              <option value="">Select Department</option>
              {departmentList.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={newEmployee.email}
              onChange={handleInputChange}
              maxLength={50} // Set maximum length to 50 characters
              size={30} // Set size of input field to 30 characters wide
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNumber" className="form-label">
              MobileNumber:
            </label>
            <input
              type="text"
              className="form-control"
              id="mobileNumber"
              name="mobileNumber"
              value={newEmployee.mobileNumber}
              onChange={handleInputChange}
              maxLength={50} // Set maximum length to 50 characters
              size={30} // Set size of input field to 30 characters wide
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="present"
              name="present"
              checked={newEmployee.present}
              onChange={() =>
                setNewEmployee({
                  ...newEmployee,
                  present: !newEmployee.present,
                })
              }
            />
            <label className="form-check-label" htmlFor="present">
              Present
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Employee
          </button>
        </form>
        {msg && <div className="mt-3 alert alert-success">{msg}</div>}
      </div>
    </div>
  );
};
