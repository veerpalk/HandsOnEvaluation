import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from './subjects/Subject'

@Injectable()
export class SubjectService {

  BASE_URL='http://localhost:9000/api/subjects'
  constructor(private http:HttpClient) { }

  getSubject()
  {
    return this.http.get<Subject>(this.BASE_URL)
  }


  postSubject(value:Subject)
  {
 return this.http.post(this.BASE_URL,value);

  }
  updateSubject(value:Subject, id:number){
    return this.http.put(this.BASE_URL+'/'+(id+1),value)
  }
}
