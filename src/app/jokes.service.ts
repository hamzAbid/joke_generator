import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  url = 'https://api.chucknorris.io/jokes/random';
  constructor(private http: HttpClient, public router: Router) {}

  getJoke() {
    return this.http.get(this.url);
  }
}
