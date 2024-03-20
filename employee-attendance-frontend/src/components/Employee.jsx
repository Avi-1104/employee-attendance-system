import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import employeeService from "../service/employee.service";
// import '../style/Employee.css'

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
    <div className="container mt-8">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card h-100 w-100">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Employee Details</h2>
              {employee ? (
                <div>
                  <p><strong>Name:</strong> {employee.name}</p>
                  <p><strong>Department:</strong> {employee.department.name}</p>
                  <p><strong>Email:</strong> {employee.email}</p>
                  <p><strong>Mobile:</strong> {employee.mobileNumber}</p>
                  <p><strong>Present:</strong> {employee.present ? "Yes" : "No"}</p>
                  <div className="d-flex justify-content-center">
                    <Link to={`../updateEmployee/${id}`} className="btn btn-primary me-2">Update</Link>
                    <button onClick={handleDeleteEmployee} className="btn btn-danger">Delete</button>
                  </div>
                </div>
              ) : (
                <p className="text-center">Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};