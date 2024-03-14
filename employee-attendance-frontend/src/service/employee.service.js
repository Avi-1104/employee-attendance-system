import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class EmployeeService {
  getAllEmployees() {
    return axios.get(`${API_URL}/employees`);
  }

  getEmployeeById(id) {
    return axios.get(`${API_URL}/employees/${id}`);
  }

  createEmployee(employee) {
    return axios.post(`${API_URL}/employees`, employee);
  }

  updateEmployee(id, employee) {
    return axios.put(`${API_URL}/employees/${id}`, employee);
  }

  deleteEmployee(id) {
    return axios.delete(`${API_URL}/employees/${id}`);
  }

  getEmployeesByDepartmentId(id) {
    return axios.get(`${API_URL}/employees/department/${id}`);
  }

}

export default new EmployeeService();
