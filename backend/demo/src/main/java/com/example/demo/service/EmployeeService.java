package com.example.demo.service;

import com.example.demo.dto.EmployeeDTO;
import com.example.demo.model.Employee;
import com.example.demo.repo.EmployeeRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<EmployeeDTO> getAllEmployees() {
        List<Employee>employeeList = employeeRepo.findAll();
        return modelMapper.map(employeeList, new TypeToken<List<EmployeeDTO>>(){}.getType());
    }

    public EmployeeDTO getEmployeeById(int id) {
        Employee employee = employeeRepo.findById(id).orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
        return modelMapper.map(employee, EmployeeDTO.class);
    }

    public EmployeeDTO saveEmployee(EmployeeDTO employeeDTO) {
        employeeRepo.save(modelMapper.map(employeeDTO, Employee.class));
        return employeeDTO;
    }

    public EmployeeDTO updateEmployee(EmployeeDTO employeeDTO) {
        employeeRepo.save(modelMapper.map(employeeDTO, Employee.class));
        return employeeDTO;
    }

    public String deleteEmployee(EmployeeDTO employeeDTO) {
        employeeRepo.delete(modelMapper.map(employeeDTO, Employee.class));
        return "Employee deleted";
    }

}
