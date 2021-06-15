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
import { PersonService } from './_services/person.service';
import { SearchService } from './_services/search.service';
import { TrendingService } from './_services/trending.service';
import { PopularShowsComponent } from './popularShows/popularShows.component';
import { TrendingsComponent } from './trendings/trendings.component';
import { MovieDetailsComponent } from './movieDetails/movieDetails.component';
import { CastsComponent } from './casts/casts.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './peopleDetails/peopleDetails.component';
import { PersonCreditsComponent } from './personCredits/personCredits.component';

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
      MoviesComponent,
      ShowsComponent,
      PeopleComponent,
      PeopleDetailsComponent,
      PersonCreditsComponent
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
    TrendingService,
    PersonService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
