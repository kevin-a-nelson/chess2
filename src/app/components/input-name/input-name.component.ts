import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements OnInit {

  @Output() newName: EventEmitter<any> = new EventEmitter();

  name = new FormControl('')

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.newName.emit(this.name.value)
  }
}
