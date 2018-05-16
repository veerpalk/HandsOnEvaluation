import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 


import { AppComponent } from './app.component';

import {CourseComponent} from './courses/courses.component'
import { CourseService } from './course.service';

import { HttpClientModule } from '@angular/common/http'

import { StudentsComponent } from './students/students.component';
import { StudentService } from './student.service';

import { SubjectsComponent } from './subjects/subjects.component';
import {SubjectService} from './subject.service'
import {FormsModule} from '@angular/forms'

import { TeachersComponent } from './teachers/teachers.component'
import {TeacherService} from './teacher.service';

import { BatchesComponent } from './batches/batches.component'
import {BatchService} from './batch.service'


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentsComponent,
    SubjectsComponent,
    TeachersComponent,
    BatchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
RouterModule.forRoot([
{path:"courses",component:CourseComponent},
 {path:"students",component:StudentsComponent},
 {path:"subjects",component:SubjectsComponent},
 {path:"teachers",component:TeachersComponent},
{path:"batches",component:BatchesComponent},
]), 
 

  ],
  providers: [
    CourseService,
    StudentService,
    SubjectService,
    TeacherService,
    BatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
