import { Component, OnInit } from '@angular/core';
import { BagService } from './shared/bag.service'

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css'],
  providers :[BagService]
})
export class BagsComponent implements OnInit {

  constructor(private bagService : BagService) { }

  ngOnInit() {
  }

}
