import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../shared/computer.service'
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  constructor(private computerService : ComputerService,private tostr: ToastrService) { }

  ngOnInit() {

    this.resetForm();
  }

  onSubmit(computerForm: NgForm) {
    if (computerForm.value.$key == null)
      this.computerService.insertComputer(computerForm.value);
    else
      this.computerService.updateComputer(computerForm.value);
    this.resetForm(computerForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(computerForm?: NgForm) {
    if (computerForm != null)
    computerForm.reset();
    this.computerService.selectedComputer = {
      $key: null,
      name: '',
      version: '',
      type: '',
      price: 0,
    }
  }

}
