import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  @Output() newPassword: EventEmitter<any> = new EventEmitter();

  password = new FormControl('')

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    this.newPassword.emit(this.password.value)
  }

}
