import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Computer} from './computer.model';

@Injectable()
export class ComputerService {
  computerList: AngularFireList<any>;
  selectedComputer: Computer = new Computer();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.computerList = this.firebase.list('computers');
    return this.computerList;
  }

  insertComputer(computer : Computer)
  {
    this.computerList.push({
      name: computer.name,
      version: computer.version,
      type: computer.type,
      price: computer.price
    });
  }
 
  updateComputer(computer : Computer){
    this.computerList.update(computer.$key,
      {
      name: computer.name,
      version: computer.version,
      type: computer.type,
      price: computer.price
      });
  }

  deleteComputer($key : string){
    this.computerList.remove($key);
  }


}
