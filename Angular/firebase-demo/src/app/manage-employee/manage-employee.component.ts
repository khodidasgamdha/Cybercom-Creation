import { Component, OnInit } from '@angular/core';
import { Employee } from '../core/model/employee/employee';
import { EmployeeService } from '../core/services/employee/employee.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  isUpdate= false;
  employees: Employee[];
  employee: Employee = {
    id: '',
    enrollment: '',
    name: '',
    designation: '',
    company: ''
  };
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  
  // get data from firestore
  getEmployee() {
    this.employeeService.getEmployee().subscribe(data => {
      this.employees = data.map(e => {
        const data = e.payload.doc.data() as Employee;
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }

  // add new employee or update exgisting
  addEmployee() {
    if(this.isUpdate) {
      this.employeeService.updateEmployee(this.employee); //update
      this.isUpdate= false;

      Swal.fire(
        'Success...', 
        'Data Updated Successfully !!', 
        'success'
      ); // sweet alert

    } else {
      this.employeeService.createEmployee(this.employee); //create
      Swal.fire(
        'Success...', 
        'Data Added Successfully !!', 
        'success'
      ); // sweet alert
    }

    this.emptyField(); //clear all fields
  }

  // update employee data
  updateEmployee(employee: Employee) {
    this.isUpdate= true;
    this.employee.id = employee.id;
    this.employee.enrollment = employee.enrollment;
    this.employee.name = employee.name;
    this.employee.designation = employee.designation;
    this.employee.company = employee.company;
  }

  // delete employee data
  deleteEmployee(id: String) {
    Swal.fire({
      title: 'Are you sure want to Delete ?',
      text: 'You will not see this any more!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it!'
    }).then((result) => {
      if (result.value) {
        this.employeeService.deleteEmployee(id); //delete
        Swal.fire(
          'Deleted...',
          'Data Deleted Successfully !!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled...',
          'Your Data is Safe :)',
          'error'
        )
      }
    })
  }

  //clear all fields
  emptyField() {
    this.employee.enrollment = '';
    this.employee.name = '';
    this.employee.designation = '';
    this.employee.company = '';
  }

}
