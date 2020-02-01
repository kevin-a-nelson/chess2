import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { ChessBoardSquareComponent } from './components/chess-board-square/chess-board-square.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    ChessBoardSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
