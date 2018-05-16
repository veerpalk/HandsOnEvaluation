import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Student} from './Student';
import {StudentService} from '../student.service'
import{BatchService} from '../batch.service'
import { Batch } from '../batches/Batch';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[
    StudentService,
    BatchService
  ]
})
export class StudentsComponent implements OnInit {

  students: Student[];
  batches:Batch[]
   enrollCliced:boolean;
  constructor(private student: StudentService, private batch:BatchService ) {
    this.students= [];
    this.batches=[];
  }
  ngOnInit() {
    this.student.getStudent()
      .subscribe((eventcourses: any) => {
         this.students = eventcourses;
      });
      this.batch.getBatch()
      .subscribe((event: any) => {
         this.batches = event;
      });

  }
  addStudent(inpStudent){
    const data:Student={
      name:inpStudent
    }
    this.student.postStudent(data)
    .subscribe((event: any) => {
      this.students[this.students.length]={
        name:event.name
      }
      window.alert("data added");
   });

  }

  EnrollInBatch(studentid){
        this.enrollCliced=true;
  }
  doneEnrollment(selectedValue){
    
  }
}

