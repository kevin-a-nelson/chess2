import { Component, OnInit, Input } from '@angular/core';
import chessPieces from '../../../public/chessPieces';

@Component({
  selector: 'app-chess-board-square',
  templateUrl: './chess-board-square.component.html',
  styleUrls: ['./chess-board-square.component.scss']
})


export class ChessBoardSquareComponent implements OnInit {
  @Input() color: string;
  @Input() isSelected: boolean;
  @Input() chessPiece: object;

  constructor() { }

  ngOnInit() {
  }
}
