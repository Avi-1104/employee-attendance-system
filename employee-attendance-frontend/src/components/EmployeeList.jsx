import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import employeeService from '../service/employee.service';
import '../style/EmployeeList.css'; // Import your CSS file for animations

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await employeeService.getAllEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((employee) => {
    if (filterStatus === 'all') {
      return true;
    } else if (filterStatus === 'present') {
      return employee.present === true;
    } else if (filterStatus === 'absent') {
      return employee.present === false;
    }
    return false;
  });

  return (
    <>
      <div className='text-right'>
        <Link to="/createEmployee" className="btn btn-primary">Create Employee</Link>
      </div>
      <div className="container">
        <h1 className="text-center mb-4">Employee List</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control mb-3"
        />
        <div className='text-center'>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="all"
            name="filter"
            value="all"
            checked={filterStatus === 'all'}
            onChange={handleFilterChange}
            className="form-check-input"
          />
          <label htmlFor="all" className="form-check-label">All</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="present"
            name="filter"
            value="present"
            checked={filterStatus === 'present'}
            onChange={handleFilterChange}
            className="form-check-input"
          />
          <label htmlFor="present" className="form-check-label">Present</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="absent"
            name="filter"
            value="absent"
            checked={filterStatus === 'absent'}
            onChange={handleFilterChange}
            className="form-check-input"
          />
          <label htmlFor="absent" className="form-check-label">Absent</label>
        </div>
        </div>
        
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="row mb-3">
            <div className="col">
              <Link to={`/employee/${employee.id}`} className="card-link">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{employee.name}</h5>
                    <p className="card-text"><label className='card-label'>Department:</label> {employee.department ? employee.department.name : 'No Department'}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
