import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-categories',
  templateUrl: './side-categories.component.html',
  styleUrls: ['./side-categories.component.scss'],
})
export class SideCategoriesComponent implements OnInit {

  private _categoriesJsonURL = '../assets/categories.json';
  public categories: any = [];

  constructor(private http: HttpClient,private router: Router) {
    this.http.get(this._categoriesJsonURL).subscribe((data) => {
      this.categories = data;
    });
  }

  goToCategoryPage(category: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/category'], {
        queryParams: { name: category.name },
      })
    );
  }

  ngOnInit(): void {}
}
