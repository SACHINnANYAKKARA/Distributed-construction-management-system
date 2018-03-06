import { Component, OnInit } from '@angular/core';
import { BagService } from '../shared/bag.service';
import { Bag } from '../shared/bag.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bag-list',
  templateUrl: './bag-list.component.html',
  styleUrls: ['./bag-list.component.css']
})
export class BagListComponent implements OnInit {
  bagList: Bag[];
  constructor(private bagService: BagService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.bagService.getData();
    x.snapshotChanges().subscribe(item => {
      this. bagList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this. bagList.push(y as Bag);
      });
    });
  }

  onEdit(emp: Bag) {
    this.bagService.selectedBag = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bagService.deleteBag(key);
      this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }

}
