import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import custom CSS for styling
import { Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import { CreateEmployee } from './components/CreateEmployee';
import Navbar from './components/Navbar';
import { UpdateEmployee } from './components/UpdateEmployee';
import DepartmentList from './components/DepartmentList';
import { CreateDepartment } from './components/CreateDepartment';
import { Employee } from './components/Employee';
import DepartmentEmployee from './components/DepartmentEmployee';
const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<EmployeeList/>}/>
        <Route path='/createEmployee' element={<CreateEmployee/>}/>
        <Route path='/departmentList' element={<DepartmentList/>}/>
        <Route path='/createDepartment' element={<CreateDepartment/>}/>
        <Route path='/updateEmployee/:id' element={<UpdateEmployee/>}/>
        <Route path='/employeeList' element={<EmployeeList/>}/>
        <Route path='/employee/:id' element={<Employee/>}/>
        <Route path='departmentList/employee/:id' element={<DepartmentEmployee/>}/>
      </Routes>
    </>
  );
};

export default App;
