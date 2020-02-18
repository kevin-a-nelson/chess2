import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-enter-password',
  templateUrl: './enter-password.component.html',
  styleUrls: ['./enter-password.component.scss']
})
export class EnterPasswordComponent implements OnInit {

  color;
  id;
  password;
  errorMsg;

  inputPassword = new FormControl('');

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://localhost:5001/api/ChessBoards/${this.id}`).subscribe(data => {
      this.password = data['password']
      this.color = data['creatorIsWhite'] ? 'black' : 'false'
    })
  }

  onSubmit() {

    if (this.password === this.inputPassword.value) {
      this.router.navigate([`/play/${this.id}/${this.color}`]);
    } else {
      this.errorMsg = "Invalid Password";
    }
    console.log(this.id, this.password, this.color, this.inputPassword.value)
  }

}
