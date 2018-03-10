import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';
import { SchoolComponent } from './school/school.component';
import { ComputersComponent } from './computers/computers.component';
import { ComputerComponent } from './computers/computer/computer.component';
import { ComputerListComponent } from './computers/computer-list/computer-list.component';
import { BagsComponent } from './bags/bags.component';
import { BagComponent } from './bags/bag/bag.component';
import { BagListComponent } from './bags/bag-list/bag-list.component';
import { FormComponent } from './form/form.component';
import { FormsComponent } from './form/forms/forms.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { PrescriptionFormsComponent } from './prescription-forms/prescription-forms.component';
import { PrescriptionFormComponent } from './prescription-forms/prescription-form/prescription-form.component';
import { PrescriptionFormListComponent } from './prescription-forms/prescription-form-list/prescription-form-list.component';
import { PatientDiagnosisHistoryFormsComponent } from './patient-diagnosis-history-forms/patient-diagnosis-history-forms.component';
import { PatientDiagnosisHistoryFormComponent } from './patient-diagnosis-history-forms/patient-diagnosis-history-form/patient-diagnosis-history-form.component';
import { PatientDiagnosisHistoryFormListComponent } from './patient-diagnosis-history-forms/patient-diagnosis-history-form-list/patient-diagnosis-history-form-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    SchoolComponent,
    ComputersComponent,
    ComputerComponent,
    ComputerListComponent,
    BagsComponent,
    BagComponent,
    BagListComponent,
    FormComponent,
    FormsComponent,
    FormListComponent,
    PrescriptionFormsComponent,
    PrescriptionFormComponent,
    PrescriptionFormListComponent,
    PatientDiagnosisHistoryFormsComponent,
    PatientDiagnosisHistoryFormComponent,
    PatientDiagnosisHistoryFormListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
