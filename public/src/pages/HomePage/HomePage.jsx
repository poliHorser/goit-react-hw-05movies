import Trending from '../../components/TrendingList/TrendingList';
import './HomePage.css'


const HomePage = () => {
  return (
    <div className='trend-div'>
      <h1 className='trend-title'>Trending today</h1>
      <Trending />
    </div>
  );
};

export default HomePage;