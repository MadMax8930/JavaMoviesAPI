import { useEffect, useRef } from "react";
import axios from 'axios';
import url from '../../api/baseUrl';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
   const reviewText = useRef();
   const params = useParams();
   const movieId = params.movieId;

   useEffect(() => {
      getMovieData(movieId);
   }, []);

   const addReview = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.post(url + "/api/v1/reviews", {
            reviewBody: reviewText.current.value,
            imdbId: movieId
         });
         const updatedReviews = [...reviews, { body: reviewText.current.value }];
         reviewText.current.value = ""; // Clears textarea
         setReviews(updatedReviews);
      } catch (err) {
         console.log(err);
      }
   }

  return (
    <Container>
      <Row>
         <Col>
            <h3>Reviews</h3>
         </Col>
      </Row>
      <Row className="mt-2">
         <Col>
            <img src={movie?.poster} alt="poster" />
         </Col>
         <Col>
            {
               <>
                  <Row>
                     <Col>
                        <ReviewForm 
                           handleSubmit={addReview} 
                           labelText="Write a Review?"
                           reviewText={reviewText}
                        />
                     </Col>
                  </Row>
                  <Row>
                     <Col>
                        <hr />
                     </Col>
                  </Row>
               </>
            }
            {
               reviews && reviews.map(newR => (
                  <>
                     <Row>
                        <Col>
                           {newR.body}                        
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <hr />
                        </Col>
                     </Row>
                  </>
               ))
            }
         </Col>
      </Row>
      <Row>
         <Col>
            <hr />
         </Col>
      </Row>
    </Container>
  )
}

export default Reviews;