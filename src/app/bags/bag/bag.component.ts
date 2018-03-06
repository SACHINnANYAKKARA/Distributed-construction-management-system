import { Component, OnInit } from '@angular/core';
import { BagService } from '../shared/bag.service'
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  constructor(private bagService: BagService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null)
      this.bagService.insertBag(employeeForm.value);
    else
      this.bagService.updateBag(employeeForm.value);
    this.resetForm(employeeForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null)
      employeeForm.reset();
    this.bagService.selectedBag = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

}
