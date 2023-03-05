import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private _jsonURL = '../assets/movies.json';
  public movies: any  = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.movies = data;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
