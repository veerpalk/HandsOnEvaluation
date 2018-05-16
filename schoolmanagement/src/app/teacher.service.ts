import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Teacher} from './teachers/Teacher'

@Injectable()
export class TeacherService {

  BASE_URL='http://localhost:9000/api/teachers'
  constructor(private http:HttpClient) { }

  getTeacher()
  {
    return this.http.get<Teacher>(this.BASE_URL)
  }


  postTeacher(value:Teacher)
  {
 return this.http.post(this.BASE_URL,value);

  }
  updateTeacher(value:Teacher, id:number){
    return this.http.put(this.BASE_URL+'/'+(id+1),value)
  }
}
