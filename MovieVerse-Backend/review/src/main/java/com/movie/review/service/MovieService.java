package com.movie.review.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.review.model.Movie;
import com.movie.review.repository.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	public Movie registerMovie(Movie movie) {
		return movieRepository.save(movie);
	}
	
	public List<Movie> getMovie(){
		return (List<Movie>) movieRepository.findAll();		 
	}
	
	public void deleteMovie(Integer id) {
		movieRepository.deleteById(id);
	}
	
	public Movie updateMovie(Movie movie) {
		Integer serialNumber = movie.getSerialNumber();
		Movie std = movieRepository.findById(serialNumber).get();
		std.setName(movie.getName());
		std.setReview(movie.getReview());
		std.setRating(movie.getRating());
		return movieRepository.save(std);
	}
	
}
