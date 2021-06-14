import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PopularMoviesComponent } from './popularMovies/popularMovies.component';
import { MovieService } from './_services/movie.service';
import { TrendingService } from './_services/trending.service';
import { PopularShowsComponent } from './popularShows/popularShows.component';
import { TrendingsComponent } from './trendings/trendings.component';
import { MovieDetailsComponent } from './movieDetails/movieDetails.component';
import { CastsComponent } from './casts/casts.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [									
    AppComponent,
      HomeComponent,
      HeaderComponent,
      SearchComponent,
      PopularMoviesComponent,
      PopularShowsComponent,
      TrendingsComponent,
      MovieDetailsComponent,
      CastsComponent,
      MoviesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [
    MovieService,
    TrendingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
