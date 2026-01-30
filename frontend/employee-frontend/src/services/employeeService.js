import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1";

// Get all employees
export const getAllEmployees = async () => {
  return await axios.get(`${API_BASE_URL}/getemployees`);
};

// Get employee by id
export const getEmployeeById = async (id) => {
  return await axios.get(`${API_BASE_URL}/getemployee/${id}`);
};

// Add employee
export const addEmployee = async (employee) => {
  return await axios.post(`${API_BASE_URL}/addemployee`, employee);
};

// Update employee
export const updateEmployee = async (employee) => {
  return await axios.put(`${API_BASE_URL}/updateemployee`, employee);
};

// Delete employee
export const deleteEmployee = async (employee) => {
  return await axios.delete(`${API_BASE_URL}/deleteemployee`, {
    data: employee,
  });
};
