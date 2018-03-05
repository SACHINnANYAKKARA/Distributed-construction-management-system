import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../shared/computer.service'

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  constructor(private computerService : ComputerService) { }

  ngOnInit() {
  }

}
