import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { TodoComponent } from './todo/todo.component';
import { EmployeesComponent } from './employees/employees.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'image/upload', pathMatch: 'full'},
  {path : 'image', component: ImagesComponent, children: [
    {path: 'upload', component: ImageComponent},
    {path: 'list', component: ImageListComponent}
  ]},
  {path : 'customer', component: CustomerComponent},
  {path : 'todo', component: TodoComponent},
  {path : 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
