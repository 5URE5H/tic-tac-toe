import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayGroundComponent } from './components/play-ground/play-ground.component';


const routes: Routes = [
  {
    path: 'play',
    component: PlayGroundComponent
  },
  {
    path: '',
    component: PlayGroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
