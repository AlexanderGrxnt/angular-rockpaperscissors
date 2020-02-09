import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  // private nameInput: string;
  constructor(private route:ActivatedRoute) { }

  userName:any;
  ngOnInit() {
    this.userName = this.route.snapshot.params['foo']
  }

  
}
