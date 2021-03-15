import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from '../../model/employee/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fireStore: AngularFirestore) { }

  // get employees
  getEmployee() {
    return this.fireStore.collection('employees').snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Employee;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    );
  }

  // add employee
  createEmployee(employee: Employee){
    return this.fireStore.collection('employees').add(employee);
  }

  // update employee
  updateEmployee(employee: Employee){
    this.fireStore.doc('employees/' + employee.id).update(employee);
  }

  // delete employee
  deleteEmployee(id: String){
    this.fireStore.doc('policies/' + id).delete();
  }

}
