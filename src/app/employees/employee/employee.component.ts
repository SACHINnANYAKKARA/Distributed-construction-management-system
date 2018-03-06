import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }

  ngOnInit() {

    this.resetForm();
  }

  onSubmit(bagForm: NgForm) {
    if (bagForm.value.$key == null)
      this.employeeService.insertEmployee(bagForm.value);
    else
      this.employeeService.updateEmployee(bagForm.value);
    this.resetForm(bagForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(bagForm?: NgForm) {
    if (bagForm != null)
      bagForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

}
