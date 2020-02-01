import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { ChessBoardSquareComponent } from './components/chess-board-square/chess-board-square.component';

const routes: Routes = [
  {
    path: 'play',
    component: ChessBoardComponent,
  },
  {
    path: 'play2',
    component: ChessBoardSquareComponent,
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
