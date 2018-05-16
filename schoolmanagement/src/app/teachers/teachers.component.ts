import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Teacher} from './Teacher';
import {TeacherService} from '../teacher.service'
import { Subject } from '../subjects/Subject';
import{SubjectService} from '../subject.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  providers:[
    TeacherService,
    SubjectService
  ]
})
export class TeachersComponent implements OnInit {

  selectedValue;
  teachers: Teacher[];
  subjects:Subject[];
  constructor(private subject: SubjectService, private teacher:TeacherService) {
    this.teachers= []
    this.subjects=[]
  }
  ngOnInit() {
    this.teacher.getTeacher().subscribe((event:any)=>{
this.teachers=event
    })
    this.subject.getSubject()
      .subscribe((event: any) => {
         this.subjects = event;
      });
  }
  addTeacher(inpTeacher){
   // console.log(this.selectedValue)
    const data:Teacher={
      name:inpTeacher,
      SubjectId:this.selectedValue
    }
    this.teacher.postTeacher(data)
    .subscribe((event: Teacher) => {
      this.teachers.push(event)
      window.alert("data added");
   });

  }

}

