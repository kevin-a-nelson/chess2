import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import chessBoard from '../../../public/chess-board'
import colors from '../../../public/colors'
import chessPieces from '../../../public/chessPieces';
import { HttpClient } from "@angular/common/http";
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})

export class ChessBoardComponent implements OnInit {

  mySubscription: Subscription;

  chessBoard;

  whiteTurn: boolean = true;

  prevSeletedRow: number;
  prevSelectedColumn: number;
  prevSelectedSquare: number;

  selectedRow: number;
  selectedColumn: number;
  selectedSquare: string;
  selectedPiece: object;

  clickedRow: number;
  clickedColumn: number;
  clickedSquare: string;
  clickedPiece: object;

  undoMove(pieceTaken) {
    const pieceToMove = this.chessBoard[this.clickedRow][this.clickedColumn];
    this.chessBoard[this.clickedRow][this.clickedColumn] = pieceTaken;
    this.chessBoard[this.selectedRow][this.selectedColumn] = pieceToMove;
  }

  movePiece() {
    const pieceToMove = this.chessBoard[this.selectedRow][this.selectedColumn];
    // location from which piece moved from is now blank
    const pieceTaken = this.chessBoard[this.clickedRow][this.clickedColumn];
    this.chessBoard[this.selectedRow][this.selectedColumn] = "";
    // location that piece moves to now has piece
    this.chessBoard[this.clickedRow][this.clickedColumn] = pieceToMove;
    // piece is no longer selected after it is moved
    return pieceTaken
  }

  async onClick(rowIdx: number, columnIdx: number) {
    this.clickedRow = rowIdx;
    this.clickedColumn = columnIdx;
    this.clickedSquare = `${rowIdx}${columnIdx}`;
    this.clickedPiece = this.getClickedPiece();

    if (this.validMove()) {

      let pieceTaken = await this.movePiece();

      if (this.kingIsChecked()) {
        this.undoMove(pieceTaken);
        this.whiteTurn = !this.whiteTurn
      }

      this.clickedRow = null;
      this.clickedColumn = null;
      this.clickedSquare = null;
      this.clickedPiece = null;

      this.selectedRow = null;
      this.selectedColumn = null;
      this.selectedSquare = null;
      this.selectedPiece = null;

      // Black's turn after white moves piece and vise versa
      this.whiteTurn = !this.whiteTurn;

      this.http.put('https://localhost:5001/api/ChessBoards/1', {
        id: 1,
        AsciiBoard: this.chessBoard.toString(),
        whiteTurn: this.whiteTurn
      }).subscribe()

      return;
    }

    // if clicked square has peice (pawn, bishop, etc ...), select square
    if (this.clickedPiece) {
      this.selectSquare();
      return;
    }
  }

  movedToSquareWithSameColor() {
    // if moving peice to empty square, piece is not moving to square with same color piece
    if (!this.clickedPiece) {
      return false;
    }
    // white/black piece can't with to square with piece of the same color
    if (this.clickedPiece['color'] === this.selectedPiece['color']) {
      return true;
    }
    return false;
  }

  validPieceMove() {
    const moves = this.selectedPiece['moves'];
    let isValid = false;
    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];

      if (move['onCapture'] && !this.clickedPiece) {
        continue;
      }

      if (move["onNoCapture"] && this.clickedPiece) {
        continue;
      }

      if (move['onRow'] && this.selectedRow !== move['onRow']) {
        continue;
      }

      if ((this.selectedRow + move.row === this.clickedRow &&
        this.selectedColumn + move.column === this.clickedColumn)) {
        isValid = true;
      }
    }
    return isValid;
  }

  hoppedOverPiece() {

    let selectedColumn = this.selectedColumn
    let clickedColumn = this.clickedColumn
    let selectedRow = this.selectedRow
    let clickedRow = this.clickedRow

    if (this.selectedPiece['image'] === "WhiteKnight") {
      return false;
    }

    if (this.selectedPiece['image'] === "BlackKnight") {
      return false;
    }

    let foundInteruptingPiece = false;
    while (true) {
      if (selectedColumn !== clickedColumn) {
        selectedColumn > clickedColumn ? selectedColumn -= 1 : selectedColumn += 1
      }
      if (selectedRow !== clickedRow) {
        selectedRow > clickedRow ? selectedRow -= 1 : selectedRow += 1
      }

      if (selectedColumn === clickedColumn && selectedRow === clickedRow) {
        break;
      }

      if (this.chessBoard[selectedRow][selectedColumn]) {
        console.log(selectedRow, selectedColumn)
        foundInteruptingPiece = true;
      }
    }

    return foundInteruptingPiece;
  }

  getKingCords(piece) {
    for (let row = 0; row < this.chessBoard.length; row++) {
      for (let column = 0; column < this.chessBoard[row].length; column++) {
        if (this.chessBoard[row][column] === piece) {
          return [row, column]
        }
      }
    }
  }

  kingIsChecked() {
    const king = this.whiteTurn ? "WKi" : "BKi";
    const kingCords = this.getKingCords(king);
    const kingRow = kingCords[0]
    const kingColumn = kingCords[1]

    const directions = [
      { row: 0, column: 1 },
      { row: 0, column: -1 },

      { row: 1, column: 0 },
      { row: 1, column: 1 },
      { row: 1, column: -1 },

      { row: -1, column: 0 },
      { row: -1, column: 1 },
      { row: -1, column: -1 },
    ]

    let potientialChecks = [];

    directions.forEach((direction) => {
      let row = kingRow - direction.row;
      let column = kingColumn - direction.column;

      if (row < 0 || row > 7) { return }
      if (column < 0 || column > 7) { return }


      let piece = this.chessBoard[row][column]

      if (piece) {
        if (this.whiteTurn && piece[0] === 'W') {
          return;
        }

        if (!this.whiteTurn && piece[0] === 'B') {
          return;
        }
        piece = chessPieces[piece]
        potientialChecks.push({ piece, row, column });
        return;
      }


      while (!piece) {
        row -= direction.row;
        column -= direction.column;

        if (row < 0 || row > 7) { return }
        if (column < 0 || column > 7) { return }

        piece = this.chessBoard[row][column]
      }

      if (this.whiteTurn && piece[0] === 'W') {
        return;
      }

      if (!this.whiteTurn && piece[0] === 'B') {
        return;
      }

      let pieceObject = chessPieces[piece]

      potientialChecks.push({ 'piece': pieceObject, row, column })
    })

    let isChecked = false;
    potientialChecks.forEach((potientialCheck) => {
      const piece = potientialCheck.piece;
      const pieceRow = potientialCheck.row;
      const pieceColumn = potientialCheck.column;

      if (!piece) {
        return;
      }

      piece.moves.forEach((move) => {

        if (move["onNoCapture"]) {
          return;
        }

        if (move['onRow'] && pieceRow !== move['onRow']) {
          return;
        }

        if (kingRow - move.row === pieceRow &&
          kingColumn - move.column === pieceColumn) {
          isChecked = true;
        }
      })
    })
    // console.table(potientialChecks);

    return isChecked;
  }

  validMove() {
    // can't move piece if piece is not selected
    if (!this.selectedPiece) {
      return false;
    }

    if (this.movedToSquareWithSameColor()) {
      return false;
    }

    if (this.hoppedOverPiece()) {
      return false;
    }

    if (!this.validPieceMove()) {
      return false;
    }

    return true;
  }

  // if clicked square has piece, select square
  getClickedPiece() {
    // if chess piece found at clicked square return true
    const pieceType = this.chessBoard[this.clickedRow][this.clickedColumn];
    return chessPieces[pieceType];
  }

  selectSquare() {
    // If selected square is clicked, deselect it
    if (this.whiteTurn) {
      const piece = this.getClickedPiece();
      if (piece['color'] == "black") {
        return;
      }
    }

    if (!this.whiteTurn) {
      const piece = this.getClickedPiece();
      if (piece['color'] == "white") {
        return;
      }
    }

    // if selected square is clicked, unselect it
    if (this.clickedSquare === this.selectedSquare) {
      this.selectedRow = null;
      this.selectedColumn = null;
      this.selectedSquare = null;
      this.selectedPiece = null;
    } else {
      // if unselected square is clicked, select it
      this.selectedRow = this.clickedRow;
      this.selectedColumn = this.clickedColumn;
      this.selectedSquare = this.clickedSquare;
      this.selectedPiece = this.getClickedPiece();
    }
  }

  getChessPiece(row: number, column: number) {
    return chessPieces[this.chessBoard[row][column]]
  }

  color(rowIdx, columnIdx) {
    if (this.selectedSquare === `${rowIdx}${columnIdx}`) {
      return colors.SELECTED;
    }
    // Every other square has either even color or odd color
    return ((rowIdx + columnIdx) % 2 === 0) ? colors.EVEN : colors.ODD;
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.chessBoard = chessBoard;
    this.getUpdatedGame();
    this.mySubscription = interval(5000).subscribe((x => {
      this.getUpdatedGame()
    }));
  }

  getUpdatedGame() {
    this.http.get('https://localhost:5001/api/ChessBoards/1').subscribe(data => {
      let asciiBoard = data['asciiBoard'];
      asciiBoard = asciiBoard.split(',')
      var i, j, temparray, chunk = 8;
      var newBoard = [];
      for (i = 0, j = asciiBoard.length; i < j; i += chunk) {
        temparray = asciiBoard.slice(i, i + chunk);
        newBoard.push(temparray)
      }
      this.chessBoard = newBoard;
      this.whiteTurn = data['whiteTurn']
    })
  }
}
