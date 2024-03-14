import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import employeeService from "../service/employee.service";

export const Employee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    if (id) {
      employeeService
        .getEmployeeById(id)
        .then((res) => {
          setEmployee(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleDeleteEmployee = () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      employeeService
        .deleteEmployee(id)
        .then(() => {
          console.log("Employee deleted successfully");
          // Redirect to employee list or do something else after deletion
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="form-container">
        <h2 className="text-center">Employee Details</h2>
        {employee ? (
          <div>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Department:</strong> {employee.department.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Mobile:</strong> {employee.mobileNumber}</p>
            <p><strong>Present:</strong> {employee.present ? "Yes" : "No"}</p>
            <div className="mt-3">
              <Link to={`../updateEmployee/${id}`} className="btn btn-primary me-2">Update</Link>
              <button onClick={handleDeleteEmployee} className="btn btn-danger">Delete</button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
