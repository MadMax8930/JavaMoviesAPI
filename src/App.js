import './App.css';
import axios from 'axios';
import url from './api/baseUrl';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {
   const [movies, setMovies] = useState();
   const [movie, setMovie] = useState();
   const [reviews, setReviews] = useState([]);

   const getMovies = async () => {
      try {
         const response = await axios.get(url + '/api/v1/movies')
         console.log('All movies:', response.data);
         setMovies(response.data);
      } catch (err) {
         console.log(err);
      }
   }

   const getMovieData = async (movieId) => {
      try {
         const response = await axios.get(url + `/api/v1/movies/${movieId}`)
         console.log('Selected movie:', response.data);
         setMovie(response.data);
         setReviews(response.data.reviewIds);
      } catch (err) {
         console.log(err);
      }
   }

   useEffect(() => {
      getMovies();
   }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home movies={movies}/>}></Route>
            <Route path='/trailer/:ytTrailerId' element={<Trailer/>}></Route>
            <Route path='/reviews/:movieId' 
                   element={<Reviews getMovieData={getMovieData} 
                                     movie={movie}
                                     reviews={reviews}
                                     setReviews={setReviews}/>}
            ></Route>
            <Route path='*' element={<NotFound/>}></Route>
         </Route>
      </Routes>
    </div>
  );
}

export default App;
