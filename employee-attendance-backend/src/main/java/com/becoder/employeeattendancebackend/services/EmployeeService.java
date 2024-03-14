package com.becoder.employeeattendancebackend.services;

import com.becoder.employeeattendancebackend.model.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> getAllEmployees();
    Employee getEmployeeById(Long id);
    Employee saveEmployee(Employee employee);
    Employee updateEmployee(Long id, Employee employee);
    void deleteEmployee(Long id);
    List<Employee> getEmployeesByDepartmentId(Long departmentId);
}
