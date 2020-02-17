import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { ChessBoardSquareComponent } from './components/chess-board-square/chess-board-square.component';
import { HomeComponent } from './components/home/home.component';
import { CreateChessGameComponent } from './components/create-chess-game/create-chess-game.component';
import { PasswordComponent } from './components/password/password.component';

const routes: Routes = [
  {
    path: 'play/:id',
    component: ChessBoardComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'new',
    component: CreateChessGameComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: '',
    redirectTo: '/play',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
