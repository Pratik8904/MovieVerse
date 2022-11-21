

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../review.service';

@Component({
  selector: 'review-root',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  title = 'moviedashboard';   

  movieDetails = null as any;
  movieToUpdate = {
    serialNumber:"",
    name:"",
    review:"",
    rating:""
  }

  constructor(private movieService: ReviewService) {
    this.getMovieDetails();
  }

  register(registerForm: NgForm) {
    this.movieService.registerMovie(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getMovieDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getMovieDetails() {
    this.movieService.getMovie().subscribe(
      (resp) => {
        console.log(resp);
        this.movieDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteMovie(movie: any) {
    this.movieService.deleteMovie(movie.serialNumber).subscribe(
      (resp) => {
        console.log(resp);
        this.getMovieDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(studuent: any){
    this.movieToUpdate = studuent;
  }

  updateMovie(){
    this.movieService.updateMovie(this.movieToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
