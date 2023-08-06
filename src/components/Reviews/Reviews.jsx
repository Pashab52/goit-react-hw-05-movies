import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { fetchReviews } from "services/movieApi";
import { Loader } from 'components/Loader/Loader';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const { movieId } = useParams();


  useEffect(() => {
    setShowLoader(true);
    // if (reviews) {
    //   return;
    // }
    const getReviews = async () => {
      try {
        const reviewsData = await fetchReviews(movieId);
        if (reviewsData.total_results) {
          const normalizeReviews = normalizeReviewsData(reviewsData.results);
          setReviews(normalizeReviews);
        } else {
          return;
        }
      } catch (error) {
        console.error(error);
      } finally {setShowLoader(false)}
    };

    getReviews();
  },[movieId]);

  const normalizeReviewsData = reviewsData => {
    return reviewsData.map(({ author, content, id, created_at }) => ({
      author,
      content,
      id,
      created_at,
    }));
  };

  return showLoader ? (
    <Loader />
  ) : (
    <ul className="rev-wrapper">
      {reviews.length ? (
        reviews.map(({ author, content, id, created_at }) => {
          return (
            <li className="rev-item-wrap" key={id}>
              <h3 className="cast-name">Author: {author}</h3>
              <p className="cast-char">{created_at}</p>
              <p className="rev-txt">{content}</p>
            </li>
          );
        })
      ) : (
        <li className="rev-item-wrap">
          <p className="cast-char">We don't have any reviews for this movie</p>
        </li>
      )}
    </ul>
  );
};

export default Reviews;