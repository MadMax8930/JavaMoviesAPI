package dev.max.movies.service;

import dev.max.movies.model.Movie;
import dev.max.movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> findAllMovies() {
        return movieRepository.findAll();
    }

    public Optional<Movie> findOneMovie(String imdbId) { return movieRepository.findMovieByImdbId(imdbId); }
}
