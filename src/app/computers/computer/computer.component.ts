import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../shared/computer.service'

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  constructor(private computerService : ComputerService) { }

  ngOnInit() {
  }

}
