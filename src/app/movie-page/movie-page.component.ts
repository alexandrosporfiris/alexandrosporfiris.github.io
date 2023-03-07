import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  loading = true;
  private _moviesJsonURL = '../assets/movies.json';
  movie: any;
  upcoming = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, public sanitizer:DomSanitizer) {
    this.loading = true;
    this.http.get(this._moviesJsonURL).subscribe((data: any) => {
      this.movie = data.find((item: any) => {
        return (item.id == this.route.snapshot.queryParamMap.get('id'));
      });
      let dateString = this.movie.date.split('/');
      let date = new Date(dateString[2], dateString[1] - 1, dateString[0]);

      if (date.getTime() > new Date().getTime()) {
        this.upcoming = true;
      }
      this.loading = false;
    });
  }

  tickets(ticketsUrl: any) {
    window.open(ticketsUrl, '_blank');
  }

  ngOnInit(): void {}
}
