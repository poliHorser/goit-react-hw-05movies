import { Suspense, useState, useEffect } from 'react';
import {Link, Outlet, useParams, useNavigate, useLocation} from 'react-router-dom';
import { fetchDetails } from 'api/Api';
import { BASE_URL } from 'api/Api';
import './MovieDetailsComp.css'
import fon from '../img/fon.jpg'


const MovieDetailsComp = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  

  useEffect(() => {
    const getMoviesDetails = async () => {
      try {
        setLoading(true);
        const { data } = await fetchDetails(id);
        setMovie(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMoviesDetails();
  }, [id]);

  const backHome = () => navigate(location.state?.from || '/');

  const { title, poster_path, overview, vote_average, genres } = movie || {};

  return (
    <div className='details'>
      {loading && <p>...Loading page</p>}
      {error && <p>Error: {error}</p>}
      <button  className='details-btn' onClick={backHome} type="button">
        Go back
      </button>
      {movie && (
        <>
          <div className='information'>
            <img className='det-img'
              src={poster_path ? BASE_URL + poster_path : fon} alt={title} />
            <div>
              <h1 className='det-title'>{title}</h1>
              <h2 className='det-score'>User Score:</h2>
              <p className='det-p'>{Math.round(vote_average * 10)}%</p>
              <h2 className='det-score'>Overview: </h2>
              <p className='det-p'>{overview}</p>
              <h2 className='det-score'>Genres:</h2>
              <p className='det-p'>
                {genres && genres.map(i => i.name).join(', ')}
              </p>
            </div>
          </div>
          <div className='information'>
            <h2 className='det-title'>Additional information</h2>
            <ul className='add-ul'>
              <li className='det-score'>
                <Link className='det-li' to={'cast'} > Cast</Link>
              </li>
              <li className='det-score'>
                <Link className='det-li' to={'reviews'} >Reviews </Link>
              </li>
            </ul>
            <Suspense fallback={<p>...Loading page</p>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetailsComp