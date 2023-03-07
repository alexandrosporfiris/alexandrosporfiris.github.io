import { MovieCategoriesComponent } from './movie-categories/movie-categories.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'movie', component: MoviePageComponent, pathMatch: 'full' },
  { path: 'category', component: MovieCategoriesComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
