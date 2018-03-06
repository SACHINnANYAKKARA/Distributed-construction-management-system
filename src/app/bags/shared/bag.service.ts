import { Injectable } from '@angular/core';
import { Bag} from './bag.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class BagService {
  bagList: AngularFireList<any>;
  selectedBag: Bag = new Bag();
  constructor(private firebase :AngularFireDatabase) { }


  getData(){
    this.bagList = this.firebase.list('bag_area');
    return this.bagList;
  }

  insertBag(bag : Bag)
  {
    this.bagList.push({
      name: bag.name,
      position: bag.position,
      office: bag.office,
      salary: bag.salary
    });
  }

  updateBag(bag : Bag){
    this.bagList.update(bag.$key,
      {
        name: bag.name,
        position: bag.position,
        office: bag.office,
        salary: bag.salary
      });
  }

  deleteBag($key : string){
    this.bagList.remove($key);
  }

}
