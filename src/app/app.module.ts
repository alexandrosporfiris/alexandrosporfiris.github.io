import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import { SideCategoriesComponent } from './side-categories/side-categories.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieCategoriesComponent } from './movie-categories/movie-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    SideCategoriesComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MoviePageComponent,
    MovieCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    DropdownModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
