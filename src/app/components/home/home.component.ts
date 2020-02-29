import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import backendUrl from '../../../public/backend'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public now: Date = new Date();

  constructor(private router: Router, private http: HttpClient) { }

  onCreate() {
    this.router.navigate(['/new'])
  }

  onJoin() {
    this.router.navigate(['/join'])
  }

  ngOnInit() {

    // let boardIds: Object = []
    // this.http.get(`${backendUrl}/api/ChessBoards`).subscribe((res: Object[]) => {
    //   if (res.length === 0) {
    //     return
    //   }

    //   res.forEach((board) => {
    //     this.http.delete(`${backendUrl}/api/ChessBoards/${board['id']}`).subscribe(
    //       res => console.log(res),
    //       err => console.log(err),
    //     )
    //   })
    // })
  }
}
