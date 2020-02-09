import { Component, OnInit } from '@angular/core';
import {Router, NavigationStart, ActivatedRoute} from '@angular/router'
import { Observable } from 'rxjs';
import {filter, map} from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  userScore = 0;
  compScore = 0;
  round = 1;
  userSelected: string;
  compSelected: string;
  action: string;
  status: string;
  compItems = [
    'rock',
    'paper',
    'scissors'
  ];

  userName;
  state$: Observable<object>;

  constructor(private location:Location, public router: Router){}

  ngOnInit(){
    this.userName = history.state;
    // this.state$ = this.activatedRoute.paramMap
    // .pipe(map(() => window.history.state))
    console.log(this.userName);
  }

  userPick(userItems: string): void {
    this.userSelected = userItems;
    console.log( this.userSelected);
    setTimeout( () => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compItems[randomNum];
      console.log(this.compSelected);
      this.checkResult();
    }, 500);
  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
      this.round ++;
    }, 2000);
  }

  win(user, comp) {
    this.userScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '. You win!';
    if(this.round >= 10)
      this.router.navigateByUrl('/results');
    else
      this.clearField();
  }

  lose(user, comp) {
    this.compScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '. You lose!';
    if(this.round >= 10)
      this.router.navigateByUrl('/results');
    else
      this.clearField();
  }

  draw(user, comp) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. You draw!';
    if(this.round >= 10)
      this.router.navigateByUrl('/results');
    else
      this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.win(userChoice, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.lose(userChoice, compChoice);
        break;
      default:
        this.draw(userChoice, compChoice);
        break;
    }

  }
}