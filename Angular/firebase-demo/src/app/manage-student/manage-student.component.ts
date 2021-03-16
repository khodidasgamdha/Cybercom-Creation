import { StudentsService } from '../core/services/students/students.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {

  constructor( private  studentsSevice: StudentsService) { }

  dataTitle = "Students List";
  feaching = false;
  students =[];

  @ViewChild('id') id: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('school') school: ElementRef;

  editMode: boolean = false;
  editId: number;

  // add student in array
  onAddStudent(id ,name ,school){

    // if edit mode is true then update value else add student
    if(this.editMode) {
      this.students[this.editId] = {
        id: id.value,
        name: name.value,
        school:school.value
      }
      this.editMode = false; // false after update value

      // sweet alert
      Swal.fire(
        'Success...', 
        'Data Updated Successfully !!', 
        'success'
      );

    }else {
      this.students = this.students || [];
      this.students.push({
        id: id.value,
        name: name.value,
        school:school.value
      })

      // sweet alert
      Swal.fire(
        'Success...', 
        'Data Added Successfully!!', 
        'success'
      );

    }
    this.id.nativeElement.value = ''; // after update empty input boxes
    this.name.nativeElement.value = '';
    this.school.nativeElement.value = '';
  }

  // add student to firebase
  onSaveStudent(){
    this.studentsSevice.saveStudent(this.students).subscribe();

    // sweet alert
    Swal.fire(
      'Success...', 
      'Data Saved to Firebase !!', 
      'success'
    );

  }

  // fetch students from firebase
  onFetchStudent(){
    this.feaching = true;
    this.studentsSevice.fetchStudent().subscribe(
      (response) => {
        const data = JSON.stringify(response)
        this.students = JSON.parse(data)
        this.feaching = false;
      },
      (err)=>console.log(err) 
    )
  }

  // edit student
  onEditStudent(id) {
    this.editMode = true;
    this.editId = id;
    this.id.nativeElement.value = this.students[id].id;
    this.name.nativeElement.value = this.students[id].name;
    this.school.nativeElement.value = this.students[id].school;
  }

  // delete student
  onDeleteStudent(id){
    Swal.fire({
      title: 'Are you sure want to Delete ?',
      text: 'You will not be see any more!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it!'
    }).then((result) => {
      if (result.value) {
        this.students.splice(id,1)
        this.onSaveStudent();
        Swal.fire(
          'Deleted...',
          'Data Deleted Successfully !!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled...',
          'Your Data is Safe :)',
          'error'
        )
      }
    })
  }

  // on initialize
  ngOnInit(): void {
    this.onFetchStudent();
  }

}
