import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../service/employee.service";
import { Link } from "react-router-dom";
import departmentService from "../service/department.service";

export const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
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
  }, [id]);

  const init = () => {
    departmentService
      .getAllDepartments()
      .then((res) => {
        setDepartmentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    employeeService
      .getEmployeeById(id)
      .then((res) => {
        setEmployee(res.data);
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
      setEmployee({ ...employee, department: selectedDepartment });
    } else {
      setEmployee({ ...employee, [e.target.name]: e.target.value });
      console.log(employee)
    }
  };

  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    employeeService
      .updateEmployee(id, employee)
      .then((res) => {
        console.log("Employee Updated Successfully");
        setMsg("Employee Updated Successfully");
        // navigation('/employeeList')
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="form-container">
        <h2 className="text-center">Update Employee</h2>
        {/* <h4 classNAme="text-center">{msg}</h4> */}
        <form onSubmit={handleUpdateEmployee}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={employee.name}
              onChange={handleInputChange}
              maxLength={50}
              size={30}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Department:
            </label>
            <select
              id="department"
              name='department'
              value={employee.department ? employee.department.id : ""}
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
              value={employee.email}
              onChange={handleInputChange}
              maxLength={50}
              size={30}
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
              value={employee.mobileNumber}
              onChange={handleInputChange}
              maxLength={50}
              size={30}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="present"
              name="present"
              checked={employee.present}
              onChange={() =>
                setEmployee({
                  ...employee,
                  present: !employee.present,
                })
              }
            />
            <label className="form-check-label" htmlFor="present">
              Present
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Update Employee
          </button>
        </form>
        {msg && <div className="mt-3 alert alert-success">{msg}
        <div className="text-right-top">
        <Link to={`/employee/${employee.id}`} className="btn-save">
              OK
        </Link>
        </div>

        </div>}
      </div>
    </div>
  );
};
