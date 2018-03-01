import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { School} from './school.model';

@Injectable()
export class SchoolService {

  schoolList: AngularFireList<any>;
  selectedSchool: School = new School();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.schoolList = this.firebase.list('schools');
    return this.schoolList;
  }

  insertSchool(school : School)
  {
    this.schoolList.push({
      name: school.name,
      grade: school.grade,
      class: school.class,
      subject: school.subject
    });
  }

  updateSchool(school : School){
    this.schoolList.update(school.$key,
      {
        name: school.name,
        grade: school.grade,
        class: school.class,
        subject: school.subject
      });
  }

  deleteSchool($key : string){
    this.schoolList.remove($key);
  }

}
