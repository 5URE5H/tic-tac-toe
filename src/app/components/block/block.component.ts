import { element } from "protractor";
import { Component, OnInit } from "@angular/core";

const X = "X";
const O = "O";
const TIED = "Tied";
const WINNING_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

@Component({
  selector: "app-block",
  templateUrl: "./block.component.html",
  styleUrls: ["./block.component.scss"],
})
export class BlockComponent implements OnInit {
  blocks: Record<string, string>;
  playerTurn: string;
  winner: string;
  gameCompleted: boolean;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.blocks = {};
    this.gameCompleted = false;
    this.playerTurn = X;
  }

  togglePlayerTurn() {
    this.playerTurn = this.playerTurn == X ? O : X;
  }

  handlePlayerInput(position) {
    if (this.gameCompleted) {
      return;
    }
    let hasWinner = false;
    this.blocks[position] = this.playerTurn;
    this.togglePlayerTurn();
    hasWinner = this.checkWinner();
    if (hasWinner) {
      this.gameCompleted = true;
    } else if (Object.keys(this.blocks).length === 9) {
      this.winner = TIED;
      this.gameCompleted = true;
    }
  }

  checkWinner(): boolean {
    return WINNING_CONDITIONS.some((ele) => {
      if (
        this.blocks[ele[0]] &&
        this.blocks[ele[0]] === this.blocks[ele[1]] &&
        this.blocks[ele[1]] === this.blocks[ele[2]]
      ) {
        this.winner = this.blocks[ele[0]];
        return true;
      }
      return false;
    });
  }
}
