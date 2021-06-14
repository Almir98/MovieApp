import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MovieDetailsComponent } from "./movieDetails/movieDetails.component";
import { MoviesComponent } from "./movies/movies.component";

export const appRoutes: Routes = [

    {path:'home',component: HomeComponent},
    { path: 'details/:type/:id', component: MovieDetailsComponent},
    {path:'movies',component: MoviesComponent},


    {path:'**',component: HomeComponent,pathMatch:'full'}
]