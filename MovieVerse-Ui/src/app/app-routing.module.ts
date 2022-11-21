import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

import { FavoriteMoviesComponent } from './movies/favorite-movies/favorite-movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { ReviewComponent } from './review/review.component';
import { LoginGuard } from './guard/login.guard';

const appRoute: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'movies' },
  {
    path:"",redirectTo:'login',pathMatch:'full'
  },
  { path: 'movies/favorites', component: FavoriteMoviesComponent,canActivate:[LoginGuard] },

  {
    path: 'login',
    component: LoginComponent,
  },


  {
    path: 'signup',
    component: SignupComponent,
  },
  
  {
    path: 'movies',
    component: HomepageComponent,canActivate:[LoginGuard],
  },

  {
    path: 'review',
    component: ReviewComponent,canActivate:[LoginGuard],
  },

  { path: 'movies/search/:movie-name', component: HomepageComponent ,canActivate:[LoginGuard]},
  { path: 'review', component: ReviewComponent,canActivate:[LoginGuard]},
  { path: 'movies/:id/:details', component: MovieDetailsComponent ,canActivate:[LoginGuard]},
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
