import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.scss']
})
export class PickColorComponent implements OnInit {

  @Output() newColor: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onPickColor(color: string) {
    this.newColor.emit(color)
  }

  ngOnInit() {
  }

}
