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
  public movies: any = [];

  filteredMovies: any = [];
  moviesDD: any = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.movies = data;
      this.movies.forEach((movie: any) => {
        this.moviesDD.push({
          name: movie.name,
          value: movie.name,
          image: movie.image,
        });
      });
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  filterMovies(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.moviesDD.length; i++) {
      let movie = this.moviesDD[i];
      if (movie.name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(movie);
      }
    }

    this.filteredMovies = filtered;
  }

  tickets(ticketsUrl: any) {
    window.open(ticketsUrl, '_blank');
  }

  ngOnInit(): void {}
}
