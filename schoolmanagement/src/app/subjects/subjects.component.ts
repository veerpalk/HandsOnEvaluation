import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Subject} from './Subject';
import {SubjectService} from '../subject.service'
import { Course } from '../courses/Course';
import{CourseService} from '../course.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers:[
    CourseService,
    SubjectService
  ]
})
export class SubjectsComponent implements OnInit {

  selectedValue;
  subjects: Subject[];
  courses:Course[];
  constructor(private course: CourseService, private subject:SubjectService) {
    this.subjects= [];
    this.courses=[]
  }
  ngOnInit() {
    this.subject.getSubject().subscribe((event:any)=>{
this.subjects=event
    })
    this.course.getCourse()
      .subscribe((event: any) => {
         this.courses = event;
      });
  }
  addSubject(inpSubject){
    console.log(this.selectedValue)
    const data:Subject={
      name:inpSubject,
      CourseId:this.selectedValue
    }
    this.subject.postSubject(data)
    .subscribe((event: Subject) => {
      this.subjects.push(event)
      window.alert("data added");
   });

  }

}

