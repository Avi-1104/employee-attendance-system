package com.becoder.employeeattendancebackend.repository;

import com.becoder.employeeattendancebackend.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
