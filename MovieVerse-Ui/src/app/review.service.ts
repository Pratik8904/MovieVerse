/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:9090';

  public registerMovieReview(reviewdata: any) {
    return this.http.post(this.API + '/registerMovieReview', reviewdata);
  }

  public getMovieReview() {
    return this.http.get(this.API + '/getMovieReview');
  }

  public deleteMovieReview(id: any) {
    return this.http.delete(this.API + '/deleteMovieReview?id=' + id);
  }

  public updateMovieReview(review: any) {
    return this.http.put(this.API + '/updateMovieReview', review);
  }
}

*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:9090';

  public registerMovie(movieData: any) {
    return this.http.post(this.API + '/registerMovie', movieData);
  }

  public getMovie() {
    return this.http.get(this.API + '/getMovie');
  }

  public deleteMovie(id: any) {
    return this.http.delete(this.API + '/deleteMovie?id=' + id);
  }

  public updateMovie(movie: any) {
    return this.http.put(this.API + '/updateMovie', movie);
  }
}
