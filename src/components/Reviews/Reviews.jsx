
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Reviews.css'
import { fetchReviews } from 'api/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        const { data } = await fetchReviews(id);
        setReviews(data.results);
        
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h4 className='reviews-title'>{author}</h4>
      <p className='reviews-p'>{content}</p>
    </li>
  ));

  const isReview = Boolean(reviews.length);

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {(isReview && <div className='review-div'><ul className='reviews-ul'>{elements}</ul></div>) || (
        <p >No reviews. Try again later.</p>
      )}
    </>
  );
};

export default Reviews;