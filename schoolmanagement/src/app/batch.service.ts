import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Batch} from './batches/Batch'

@Injectable()
export class BatchService {

  BASE_URL='http://localhost:9000/api/batches'
  constructor(private http:HttpClient) { }

  getBatch()
  {
    return this.http.get<Batch>(this.BASE_URL)
  }

  postBatch(value:Batch)
  {
 return this.http.post(this.BASE_URL,value);

  }
}
