import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabaseModule } from "angularfire2/database";
// import { AngularFirestoreModule } from "angularfire2/firestore";
// import { AngularFirestore } from "@angular/fire/firestore";

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './shared/customer.service';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    TodoComponent,
    EmployeeComponent,
    ListEmployeeComponent,
    EmployeesComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  entryComponents: [CustomerComponent],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
