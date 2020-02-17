import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-chess-games',
  templateUrl: './chess-games.component.html',
  styleUrls: ['./chess-games.component.scss']
})
export class ChessGamesComponent implements OnInit {

  chessGames;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("https://localhost:5001/api/ChessBoards").subscribe(res => {
      this.chessGames = res
      console.log(res)
    })
  }

  onClick(gameId) {
    this.router.navigate([`/play/${gameId}`]);
  }
}
