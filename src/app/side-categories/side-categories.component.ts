import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-categories',
  templateUrl: './side-categories.component.html',
  styleUrls: ['./side-categories.component.scss'],
})
export class SideCategoriesComponent implements OnInit {

  private _categoriesJsonURL = '../assets/categories.json';
  public categories: any = [];

  constructor(private http: HttpClient) {
    this.http.get(this._categoriesJsonURL).subscribe((data) => {
      this.categories = data;
    });
  }

  ngOnInit(): void {}
}
