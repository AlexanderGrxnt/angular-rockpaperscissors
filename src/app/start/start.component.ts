import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  
  public userName: string;
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit() {
  }

  onKey(event: any) { 
    this.userName += event.target.value + ' | ';
    
  }
  
}
