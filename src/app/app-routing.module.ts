import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JokesComponent} from './jokes/jokes.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'jokes',
    component: JokesComponent
  },
  {
    path: '',
    component: HomeComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
