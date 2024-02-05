import { Link, useLocation } from 'react-router-dom';
import './MoviesList.css'

const MoviesList = ({ items }) => {
  const location = useLocation();
  
  return (
    <div>
      <ul className='movies-list'>{items.map(({ id, title }) => (
        <li key={id} className='movie-li'>
          <Link className="movie-link"
      
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}</ul>
    </div>
  );
};

export default MoviesList;