import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviews } from "services/movieApi";

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        
        const getReviews = async () => {
            try {
                const reviewsData = await fetchReviews(movieId);
                const normalizeReviews = normalizeReviewsData(reviewsData.results);
                setReviews(normalizeReviews);

            } catch (error) {
                console.error(error)
            }
        }

        getReviews();
    })

    const normalizeReviewsData = (reviewsData) => { 
        return reviewsData.map(({ author, content, id, created_at }) => ({
          author,
          content,
          id,
          created_at,
        }));
    };


    return (
      <ul className="rev-wrapper">
        {reviews &&
          reviews.map(({ author, content, id, created_at }) => {
            return (
              <li className="rev-item-wrap" key={id}>
                <h3 className="cast-name">Author: {author}</h3>
                <p className="cast-char">{created_at}</p>
                <p className="rev-txt">{content}</p>
              </li>
            );
          })}
      </ul>
    );

}