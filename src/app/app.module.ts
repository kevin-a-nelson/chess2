import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { ChessBoardSquareComponent } from './components/chess-board-square/chess-board-square.component';
import { HomeComponent } from './components/home/home.component';
import { CreateChessGameComponent } from './components/create-chess-game/create-chess-game.component';
import { PasswordComponent } from './components/password/password.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PickColorComponent } from './components/pick-color/pick-color.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChessGamesComponent } from './components/chess-games/chess-games.component';
import { InputNameComponent } from './components/input-name/input-name.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    ChessBoardSquareComponent,
    HomeComponent,
    CreateChessGameComponent,
    PasswordComponent,
    PickColorComponent,
    ChessGamesComponent,
    InputNameComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
