import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import backendUrl from '../../../public/backend'

@Component({
  selector: 'app-chess-games',
  templateUrl: './chess-games.component.html',
  styleUrls: ['./chess-games.component.scss']
})
export class ChessGamesComponent implements OnInit {

  chessGames;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(`${backendUrl}/api/ChessBoards`).subscribe(res => {
      this.chessGames = res
    })
  }

  onClick(gameId) {
    this.router.navigate([`/password/${gameId}`]);
  }
}
