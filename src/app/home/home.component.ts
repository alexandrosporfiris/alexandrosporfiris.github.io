import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = true;
  private _moviesJsonURL = '../assets/movies.json';
  public movies: any = [];

  filteredMovies: any = [];

  constructor(private http: HttpClient, private router: Router) {
    this.loading = true;
    this.http.get(this._moviesJsonURL).subscribe((data: any) => {
      data.forEach((movie: any) => {
        let dateString = movie.date.split('/');
        let date = new Date(dateString[2], dateString[1] - 1, dateString[0]);

        if (date.getTime() > new Date().getTime()) {
          this.movies.push(movie);
        }
      });
      this.loading = false;
    });
  }
  ngOnInit(): void {}

  tickets(ticketsUrl: any) {
    window.open(ticketsUrl, '_blank');
  }

  goToMoviePage(movie: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/movie'], {
        queryParams: { id: movie.id },
      })
    );
  }
}
