import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Course} from './courses/Course'

@Injectable()
export class CourseService {

  BASE_URL='http://localhost:9000/api/courses'
  constructor(private http:HttpClient) { }

  getCourse()
  {
    return this.http.get<Course>(this.BASE_URL)
  }
getBatch(courseId:number){
  return this.http.get(this.BASE_URL+'/'+courseId+'/batches')
}

getBatchLecture(courseId:number,batchId:number){
  return this.http.get(this.BASE_URL+'/'+courseId+'/batches/'+batchId+'/lectures')
}

getBatchStudent(courseId:number,batchId:number){
  return this.http.get(this.BASE_URL+'/'+courseId+'/batches/'+batchId+'/students')
}
  postCourse(value:Course)
  {
 return this.http.post(this.BASE_URL,value);

  }
  updateCourse(value:Course, id:number){
    return this.http.put(this.BASE_URL+'/'+(id+1),value)
  }
}
