package com.movie.review.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.movie.review.model.Movie;
@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {

}
