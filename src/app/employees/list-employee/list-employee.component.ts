import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  list: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(res => {
      this.list = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Employee};
      });
    });
  }

  onEdit(employee: Employee) {
    this.employeeService.formData = Object.assign({}, employee);
  }

  onDelete(employeeId) {
    this.employeeService.deleteEmployee(employeeId);
  }
}
