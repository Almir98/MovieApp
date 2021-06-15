import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MovieDetailsComponent } from "./movieDetails/movieDetails.component";
import { MoviesComponent } from "./movies/movies.component";
import { PeopleComponent } from "./people/people.component";
import { PeopleDetailsComponent } from "./peopleDetails/peopleDetails.component";
import { ShowsComponent } from "./shows/shows.component";

export const appRoutes: Routes = [

    {path:'home',component: HomeComponent},
    { path: 'details/:type/:id', component: MovieDetailsComponent},
    {path:'movies',component: MoviesComponent},
    {path:'tv',component: ShowsComponent},
    {path:'people',component: PeopleComponent},
    { path: 'person/:id', component: PeopleDetailsComponent},

    {path:'**',component: HomeComponent,pathMatch:'full'}
]