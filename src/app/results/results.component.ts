import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  winner: string;
  userScore;
  compScore;

  ngOnInit(): void {
    this.winner = 'placeholder';
    this.userScore = 0;
    this.compScore = 0;
  }

}
