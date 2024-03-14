import React, { useEffect, useState } from 'react';
import departmentService from '../service/department.service';
import { Link } from 'react-router-dom';
import '../style/DepartmentList.css'; // Import your CSS file for styling

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await departmentService.getAllDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleDeleteDepartment = async (id) => {
    try {
      await departmentService.deleteDepartment(id);
      setDepartments(departments.filter((department) => department.id !== id));
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='text-right'>
        
        <Link to="/createDepartment" className="btn btn-primary">Create Department</Link>
      </div>
      <div className='container'>
      <h1 className="text-center mb-4">Department List</h1>
      <input
          type="text"
          placeholder="Search by department name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control"
        />
      <div className="department-list">
        {filteredDepartments.map((department) => (
          <Link to={`employee/${department.id}`} className="card-link" key={department.id}>
            <div className="department-card">
              <div className="card-body">
                <h5 className="card-title">{department.name}</h5>
                <button onClick={() => handleDeleteDepartment(department.id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
      
    </>
  );
};

export default DepartmentList;
