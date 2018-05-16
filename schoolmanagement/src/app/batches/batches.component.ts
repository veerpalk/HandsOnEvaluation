import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Batch} from './Batch';
import {BatchService} from '../batch.service'


@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
  batches: Batch[];
  constructor(private batch: BatchService) {
    this.batches= [];
  }
  ngOnInit() {
    this.batch.getBatch()
      .subscribe((event: any) => {
         this.batches = event;
      });
  }
}
