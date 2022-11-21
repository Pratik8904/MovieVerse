package com.movie.review.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movie.review.model.Movie;
import com.movie.review.service.MovieService;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class MovieController {

	@Autowired
	private MovieService movieService;


	@PostMapping("/registerMovie")
	public Movie registerMovie(@RequestBody Movie movie) {
		return movieService.registerMovie(movie);
	}
	

	@GetMapping("/getMovie")
	public List<Movie> getMovie(){
		return movieService.getMovie();		
	}
	

	@DeleteMapping("/deleteMovie")
	public void deleteMovie(@RequestParam Integer id) {
		movieService.deleteMovie(id);
	}
	

	@PutMapping("/updateMovie")
	public Movie updateMovie(@RequestBody Movie movie) {
		return  movieService.updateMovie(movie);
	}
}
