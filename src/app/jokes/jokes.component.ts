import { Component, OnInit } from '@angular/core';
import {JokesService} from '../jokes.service';
import { Joke} from '../joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  public jokes: Joke;

  constructor(private jokeService: JokesService) { }

  ngOnInit() {
    this.joking();
  }
  joking(){
      this.jokeService.getJoke().subscribe((data: Joke) => {
      this.jokes = data;
      console.log(this.jokes);
    });
  }

}
