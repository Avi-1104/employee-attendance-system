import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)', padding: '10px 20px' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" aria-current="page" style={{ fontSize: '24px', fontWeight: 'bold', marginLeft: '10px' }}>
          Employee Attendance System
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" style={{ fontSize: '18px', backgroundColor: 'rgba(204, 229, 255, 0.5)', padding: '10px 15px', borderRadius: '5px', margin: '0 5px', transition: 'background-color 0.3s ease' }} >
                Employee List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/departmentList" className="nav-link active" aria-current="page" style={{ fontSize: '18px', backgroundColor: 'rgba(204, 229, 255, 0.5)', padding: '10px 15px', borderRadius: '5px', margin: '0 5px', transition: 'background-color 0.3s ease' }}>
                Department List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
