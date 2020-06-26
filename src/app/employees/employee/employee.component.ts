import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService,
              private toatsrService: ToastrService) { }

    ngOnInit(): void {
      this.resetForm();
    }

    onSubmit(form?: any) {
      if (form.value.id == null) {
        this.employeeService.addEmployee(form.value);
      } else {
        this.employeeService.updateEmployee(form.value.id, form.value);
      }
      this.resetForm();
      this.toatsrService.success('employee added successfully', 'EMP. Register');
    }

    resetForm(form?: NgForm) {
      if (form != null) {
      form.resetForm();
      }
      this.employeeService.formData = {
        id: null,
        fullName: '',
        position: '',
        empCode: '',
        mobile: '',
      };
    }

  }

