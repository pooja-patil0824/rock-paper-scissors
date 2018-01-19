import { Component, OnInit } from '@angular/core';
import { GameOptions } from '../gameOptions';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  userCounter:number = 0;
  computerCounter:number = 0;
  winnerMessage:string = '';
  userChoice: GameOptions = {
    id:3, name:'userWaiting', url:'../../assets/qmark.png'
  };
  computerChoice: GameOptions = {
    id:4, name:'computerWaiting', url:'../../assets/waiting.gif'
  };
  defaultOptions :GameOptions[] = [
    { id: 0, name:'rock', url:'../../assets/rock.png'},
    { id: 1, name:'paper', url:'../../assets/paper.png'},
    { id: 2, name:'scissors', url:'../../assets/scissors.png'}
  ];

  onSelectOption(option: GameOptions): void {
    let bond = option.name;
    let holmes = this.getComputerSelection();
    this.winnerMessage = this.findWinner(bond, holmes);
    this.userChoice = option;
  }
  getComputerSelection() {
    const randomNumber = Math.floor(Math.random()*3);
    this.computerChoice = this.defaultOptions.find((temp)=> temp.id === randomNumber);
    return this.computerChoice.name;
  }
  findWinner(val1, val2) {
    const winners = {
        rock:'paper',
        paper:'scissors',
        scissors:'rock'
    };
    if(val1 === winners[val2]) {
      this.userCounter++;
      return 'James Bond won';
    };
    if(val2 === winners[val1]) {
      this.computerCounter++;
      return 'Sherlock Holmes won';
    };
    return 'TIE';
  }
  restartGame() {
    this.winnerMessage = '';
    this.userCounter = 0;
    this.computerCounter = 0;
    this.userChoice = {
      id:3, name:'userWaiting', url:'../../assets/qmark.png'
    };
    this.computerChoice = {
    id:4, name:'computerWaiting', url:'../../assets/waiting.gif'
    };
  }
  constructor() {}
  ngOnInit() {}
}
