import { Component, OnInit } from '@angular/core';
import { Employee } from '../core/model/employee/employee';
import { EmployeeService } from '../core/services/employee/employee.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  employees: Employee[];
  isUpdate = false;
  employee: Employee = {
    id: '',
    name: '',
    designation: ''
  };
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  
  getEmployee() {
    this.employeeService.getEmployee().subscribe(employee => {
      this.employees = employee;
    });
  }

  addEmployee() {
    this.employeeService.createEmployee(this.employee);
    this.employee.id = '';
    this.employee.name = '';
    this.employee.designation = '';
  }

  updateEmployee(employee: Employee) {
    this.isUpdate = true;
    this.employeeService.updateEmployee(employee);
    this.isUpdate = false;
  }

  deleteEmployee(id: String) {
    this.employeeService.deleteEmployee(id);
  }

}
