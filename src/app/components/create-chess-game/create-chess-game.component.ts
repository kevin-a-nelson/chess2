import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import backendUrl from '../../../public/backend'

@Component({
  selector: 'app-create-chess-game',
  templateUrl: './create-chess-game.component.html',
  styleUrls: ['./create-chess-game.component.scss']
})

export class CreateChessGameComponent implements OnInit {
  step: number;
  color: string;
  name: string;
  password;
  createdChessBoardId: number;
  public now: Date = new Date();

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.step = 1
  }

  onNewColor(color) {
    this.color = color;
    this.step++;
  }

  onNewName(name) {
    this.name = name;
    this.step++;
  }

  onNewPassword(password) {
    this.password = password;
    this.createGame();
  }

  createGame() {
    this.http.post(`${backendUrl}/api/ChessBoards`, {
      "asciiBoard": "BR,BKn,BB,BQ,BKi,BB,BKn,BR,BP,BP,BP,BP,BP,BP,BP,BP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,WP,WP,WP,WP,WP,WP,WP,WP,WR,WKn,WB,WQ,WKi,WB,WKn,WR",
      "whiteTurn": true,
      "creatorIsWhite": this.color === "white" ? true : false,
      "name": this.name,
      "password": this.password,
      "createdAt": this.now.toISOString(),
    }).subscribe(
      res => this.setCreatedChessBoardId(res['id'])
    )
  }

  setCreatedChessBoardId(id) {
    this.router.navigate([`/play/${id}/${this.color}`]);
  }
}
