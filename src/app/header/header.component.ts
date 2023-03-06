import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private _moviesJsonURL = '../assets/movies.json';

  filteredMovies: any = [];
  moviesDD: any = [];

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(this._moviesJsonURL).subscribe((data: any) => {
      data.forEach((movie: any) => {
        this.moviesDD.push({
          name: movie.name,
          value: movie.name,
          imageUrl: movie.imageUrl,
          id: movie.id,
        });
      });
    });
  }

  ngOnInit(): void {}

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

  goToMoviePage(movie: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/movie'], {
        queryParams: { id: movie.id },
      })
    );
  }

  goToHome() {
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() =>
      this.router.navigate(['/home'])
    );
  }
}
