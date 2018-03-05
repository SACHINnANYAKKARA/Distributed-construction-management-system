import { Component, OnInit } from '@angular/core';
import { ComputerService } from './shared/computer.service'
@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css'],
  providers :[ComputerService]
})
export class ComputersComponent implements OnInit {

  constructor(private computerService : ComputerService) { }

  ngOnInit() {
  }

}
