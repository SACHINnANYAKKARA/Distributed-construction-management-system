import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { BagService } from '../shared/bag.service';
import { ToastrService } from 'ngx-toastr';
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

  onSubmit(bagForm: NgForm) {
    if (bagForm.value.$key == null)
      this.bagService.insertBag(bagForm.value);
    else
      this.bagService.updateBag(bagForm.value);
    this.resetForm(bagForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(bagForm?: NgForm) {
    if (bagForm != null)
      bagForm.reset();
    this.bagService.selectedBag = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

}
