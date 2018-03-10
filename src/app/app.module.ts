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
import { PatientInjectionEntryFormsComponent } from './patient-injection-entry-forms/patient-injection-entry-forms.component';
import { PatientInjectionEntryFormComponent } from './patient-injection-entry-forms/patient-injection-entry-form/patient-injection-entry-form.component';
import { PatientInjectionEntryFormListComponent } from './patient-injection-entry-forms/patient-injection-entry-form-list/patient-injection-entry-form-list.component';
import { PatientReceiptEntryFormsComponent } from './patient-receipt-entry-forms/patient-receipt-entry-forms.component';
import { PatientReceiptEntryFormComponent } from './patient-receipt-entry-forms/patient-receipt-entry-form/patient-receipt-entry-form.component';
import { PatientReceiptEntryFormListComponent } from './patient-receipt-entry-forms/patient-receipt-entry-form-list/patient-receipt-entry-form-list.component';
import { AccumulatedReceiptFormsComponent } from './accumulated-receipt-forms/accumulated-receipt-forms.component';
import { AccumulatedReceiptFormComponent } from './accumulated-receipt-forms/accumulated-receipt-form/accumulated-receipt-form.component';
import { AccumulatedReceiptFormListComponent } from './accumulated-receipt-forms/accumulated-receipt-form-list/accumulated-receipt-form-list.component';



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
    PatientDiagnosisHistoryFormListComponent,
    PatientInjectionEntryFormsComponent,
    PatientInjectionEntryFormComponent,
    PatientInjectionEntryFormListComponent,
    PatientReceiptEntryFormsComponent,
    PatientReceiptEntryFormComponent,
    PatientReceiptEntryFormListComponent,
    AccumulatedReceiptFormsComponent,
    AccumulatedReceiptFormComponent,
    AccumulatedReceiptFormListComponent
   
   
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
