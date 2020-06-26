import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;

  constructor(private firestore: AngularFirestore) { }

  addEmployee(emp: Employee) {
    this.firestore.collection('employee').add(emp);
  }

  updateEmployee(id: string, emp: Employee) {
    this.firestore.doc('employee/' + id).update(emp);
  }

  getEmployees() {
    return this.firestore.collection('employee').snapshotChanges();
  }

  deleteEmployee(employeeId: string) {
    this.firestore.doc('employee/' + employeeId).delete();
  }
}
