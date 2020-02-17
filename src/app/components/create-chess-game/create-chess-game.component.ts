import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

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
    console.log(password)
    this.password = password;
    this.createGame();
  }

  createGame() {
    this.http.post("https://localhost:5001/api/ChessBoards", {
      "asciiBoard": "BR,BKn,BB,BQ,BKi,BB,BKn,BR,BP,BP,BP,BP,BP,BP,BP,BP,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,WP,WP,WP,WP,WP,WP,WP,WP,WR,WKn,WB,WQ,WKi,WB,WKn,WR",
      "whiteTurn": this.color === "white" ? true : false,
      "name": this.name,
      "password": this.password
    }).subscribe(
      res => this.setCreatedChessBoardId(res['id'])
    )
  }

  setCreatedChessBoardId(id) {
    this.router.navigate([`/play/${id}`]);
  }
}
