import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// import Button from 'components/Button/Button';
import MoviesSearchForm from 'components/MovieSearch/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'components/MovieSearch/MoviesList/MoviesList';

import { fetchSearch } from 'api/Api';

import './MovieSearch.css'

const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [totalHits] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get('search');
    const page = searchParams.get('page');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
            setLoading(true);
              const { data } = await fetchSearch(search, page);
               setMovies(prevMovies =>
            data.results?.length ? [...prevMovies, ...data.results] : prevMovies
            );
            //   const newMovies = data.results?.length ? [...prevMovies, ...data.results] : prevMovies;

            // // Сортування за назвою фільму в алфавітному порядку
            // const sortedMovies = newMovies.sort((a, b) => a.title.localeCompare(b.title));

            // setMovies(sortedMovies);
            } catch (error) {
            setError(error.message);
            } finally {
            setLoading(false);
            }
        };

        if (search && (page === '1' || !page)) {
            fetchMovies();
        }
    }, [search, page]);


    const handleSearch = ({ search }) => {
        setSearchParams({ search, page: 1 });
        setMovies([]);
    };

    // const loadMore = () => setSearchParams({ search, page: Number(page) + 1 });
    

    const isMovies = Boolean(movies.length);        
  

    return (
        <div className='search'>
        <MoviesSearchForm onSubmit={handleSearch} />
        {error && <p>{error}</p>}
        {loading && <p>...Loading page</p>}
            {isMovies && <MoviesList items={movies} />}
             {/* {isMovies && (
        <div >
          <Button onClick={loadMore} type="button">
            Load more
          </Button>
        </div>
      )} */}
    </div>
    );
}
   
export default MovieSearch