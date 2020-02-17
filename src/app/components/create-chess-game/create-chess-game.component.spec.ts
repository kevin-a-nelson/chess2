import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChessGameComponent } from './create-chess-game.component';

describe('CreateChessGameComponent', () => {
  let component: CreateChessGameComponent;
  let fixture: ComponentFixture<CreateChessGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChessGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChessGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
