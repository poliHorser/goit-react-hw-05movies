import { useState, useEffect } from 'react';
import { fetchTrending } from 'api/Api';
import MoviesList from 'components/MovieSearch/MoviesList/MoviesList';

const TrendingList = () => {
  const [trending, setTrending] = useState([]);


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchTrendList = async () => {
        try {
          setLoading(true);
          const TrendLIst = await fetchTrending();
          const { results } = TrendLIst.data;
          const sortedResults = results?.length
            ? results.sort((a, b) => a.title.localeCompare(b.title))
            : [];

          setTrending(sortedResults);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchTrendList();
  }, []);


  return (
    <>
      {error && <p >{error}</p>}
      {loading && <p>...Loading page</p>}
      {Boolean(trending.length) && <MoviesList items={trending} />}
    </>
  );
};

export default TrendingList;