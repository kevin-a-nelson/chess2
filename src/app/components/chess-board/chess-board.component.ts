import { Component, OnInit } from '@angular/core';
import chessBoard from '../../../public/chess-board'
import colors from '../../../public/colors'
import chessPieces from '../../../public/chessPieces';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {
  chessBoard = chessBoard;
  prevSquare: string;
  currentSquare: string;

  selectSquare(rowIdx, columnIdx) {
    this.prevSquare = (this.prevSquare === this.currentSquare) ? null : this.currentSquare;
    this.currentSquare = `${rowIdx}${columnIdx}`;
  }

  isSelected(rowIdx, columnIdx) {
    if (this.currentSquare !== `${rowIdx}${columnIdx}`) {
      return false;
    }

    if (this.currentSquare === this.prevSquare) {
      return false;
    }

    return true;
  }

  color(rowIdx, columnIdx) {

    if (!this.isSelected(rowIdx, columnIdx)) {
      return ((rowIdx + columnIdx) % 2 === 0) ? colors.EVEN : colors.ODD;
    }

    return colors.SELECTED;

  }

  chessPiece(rowIdx, columnIdx) {
    return chessPieces[this.chessBoard[rowIdx][columnIdx]]
  }

  constructor() { }

  ngOnInit() {
  }
}
