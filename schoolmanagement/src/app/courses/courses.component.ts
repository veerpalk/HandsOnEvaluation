import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Course} from './Course';
import {CourseService} from '../course.service'
import {BatchService} from '../batch.service'
import {StudentService} from '../student.service'
import { Batch } from '../batches/Batch';
import { Student } from '../students/Student';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
 
  providers:[
    CourseService,
    BatchService
  ]
})

export class CourseComponent implements OnInit {
  courses: Course[];
  batches:Batch[];
  lectures:any[];
  students:any[];
  selectedValue;
  showBatchesClicked:boolean;
  showLectureAndBatchedClicked:boolean

  constructor(private course: CourseService , private batch :BatchService,private student :StudentService) {
    this.courses= [];
    this.batches=[];
    this.students=[]
  }
  ngOnInit() {
    this.course.getCourse()
      .subscribe((eventcourses: any) => {
         this.courses = eventcourses;
      });
  }
  addCourse(inpCourse){
    const data:Course={
      name:inpCourse
    }
    this.course.postCourse(data)
    .subscribe((eventcourses: any) => {
      this.courses[this.courses.length]={
        name:eventcourses.name
      }
   });

  }
  showBatches(courseid){
    this.course.getBatch(courseid).subscribe((event:any)=>{
      this.batches=event
      console.log(this.batches)

    })
    this.showBatchesClicked=true;
  }

  addBatch(inpBatch){
    const data:Batch={
      name:inpBatch,
      CourseId:this.selectedValue
    }
  this.batch.postBatch(data)
  .subscribe((event: any) => {
    this.batches=event
    window.alert("data added");
 });

  }
  showLectureAndBatcheStudent(courseId:number,batchId:number){
    console.log(courseId+" "+batchId)
  
     this.course.getBatchLecture(courseId,batchId).subscribe((event:any)=>{
       this.lectures=event

     })
  //   this.course.getBatchStudent(courseId,batchId).subscribe((event:any)=>{
  //      this.students=event
  //  this.showLectureAndBatchedClicked=true;
 // });
}


addStudent(inpStudent){
  const data:Student={
    name:inpStudent
  }
  this.student.postStudent(data)
  .subscribe((event: any) => {
    this.students=event
    window.alert("data added");
 });

}
}

