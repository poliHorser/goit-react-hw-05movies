import { fetchActor } from 'api/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import img from '../img/photo.jpg';
import './Cast.css'
import { BASE_URL } from 'api/Api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        setLoading(true);
        const { data } = await fetchActor(id);
        setCast(data.cast);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
  }, [id]);

  const elements = cast.map(
    ({ id, character, original_name, profile_path }) => (
      <li key={id}>
        <img className='cast-img'
          src={profile_path ? BASE_URL + profile_path : img}
          alt=""
        />
        <h3 className='cast-title'>{character}</h3>
        <p className='cast-p'>{original_name}</p>
      </li>
    )
  );

  const isCast = Boolean(cast.length);

  return (
    <>
      {loading && <p>...Loading page</p>}
      {error && <p>{error}</p>}
      {(isCast && <div className='cast'><ul className='cast-ul'>{elements}</ul></div>) || (
        <p >No Cast information</p>
      )}
    </>
  );
};

export default Cast;