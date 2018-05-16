import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Student} from './students/Student'

@Injectable()
export class StudentService {

  BASE_URL='http://localhost:9000/api/students'
  constructor(private http:HttpClient) { }

  getStudent()
  {
    return this.http.get<Student>(this.BASE_URL)
  }


  postStudent(value:Student)
  {
 return this.http.post(this.BASE_URL,value);

  }
  updateStudent(value:Student, id:number){
    return this.http.put(this.BASE_URL+'/'+(id+1),value)
  }
}
