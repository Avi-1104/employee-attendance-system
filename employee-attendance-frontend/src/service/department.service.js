import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class DepartmentService {
  getAllDepartments() {
    return axios.get(`${API_URL}/departments`);
  }

  getDepartmentById(id) {
    return axios.get(`${API_URL}/departments/${id}`);
  }

  createDepartment(department) {
    return axios.post(`${API_URL}/departments`, department);
  }

  updateDepartment(id, department) {
    return axios.put(`${API_URL}/departments/${id}`, department);
  }

  deleteDepartment(id) {
    return axios.delete(`${API_URL}/departments/${id}`);
  }
}

export default new DepartmentService();
