import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  onCreate() {
    console.log("Created")
    this.router.navigate(['/new'])
  }

  onJoin() {
    this.router.navigate(['/join'])
  }

  ngOnInit() {
  }

}
