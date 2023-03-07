import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.scss'],
})
export class MovieCategoriesComponent implements OnInit {
  loading = true;
  private _moviesJsonURL = '../assets/movies.json';
  public movies: any = [];

  filteredMovies: any = [];
  categoryName: any = null;

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) {
    this.loading = true;
    this.categoryName = this.route.snapshot.queryParamMap.get('name');

    this.http.get(this._moviesJsonURL).subscribe((data: any) => {
      data.forEach((movie: any) => {

        if (movie.category.replace(/\s/g, '').toLowerCase() ==   this.categoryName.replace(/\s/g, '').toLowerCase()) {
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
