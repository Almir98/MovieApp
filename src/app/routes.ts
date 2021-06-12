import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [

    {path:'home',component: HomeComponent},
    // {path:'login',component: LoginComponent},
    // {path:'info',component: InfoComponent},
    // {path:'all-posts',component: PostComponent},
    // {path:'new-post',component: AddPostComponent},
    // {path:'post-details/:id',component: PostDetailsComponent},
    // {path:'edit-post/:id',component: EditPostComponent},


    {path:'**',component: HomeComponent,pathMatch:'full'}
]