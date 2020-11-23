import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  blocks = {};
  playerTurn = 'X';
  winner = '';
  gameCompleted = false;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.blocks = {};
    this.gameCompleted = false;
    this.playerTurn = 'X';
  }

  togglePlayerTurn() {
    this.playerTurn = this.playerTurn == 'X' ? 'O' : 'X';
  }

  handlePlayerInput(position) {
    if(this.gameCompleted) {
      return;
    }
    this.blocks[position] = this.playerTurn;
    this.togglePlayerTurn();
    this.checkWinner();
  }

  checkWinner() {
    const winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2]
    ];
    winConditions.forEach(ele => {
      if(this.blocks[ele[0]] === this.blocks[ele[1]] && this.blocks[ele[1]] === this.blocks[ele[2]] && this.blocks[ele[0]]) {
        this.winner = this.blocks[ele[0]];
        this.gameCompleted = true;
      } else {
        if(Object.keys(this.blocks).length == 9) {
          this.winner = 'Tied';
          this.gameCompleted = true;
        }
      }
    });
  }

}
