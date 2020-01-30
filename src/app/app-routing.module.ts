import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessBoardComponent } from './chess-board/chess-board.component';


const routes: Routes = [
  {
    path: 'play',
    component: ChessBoardComponent,
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
