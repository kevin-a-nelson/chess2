import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessGamesComponent } from './chess-games.component';

describe('ChessGamesComponent', () => {
  let component: ChessGamesComponent;
  let fixture: ComponentFixture<ChessGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
