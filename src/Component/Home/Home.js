import React from 'react';
import HeroImage from '../Elements/HeroImage/HeroImage';
import SearchBar from '../Elements/SearchBar/SearchBar';
import FourColGrid from '../Elements/FourColGrid/FourColGrid';
import MovieThumb from '../Elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../Elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../Elements/Spinner/Spinner';
import './Home.css';

const collection = [
  { src: '/images/1.jpg', caption: "SÁT THỦ VÔ CÙNG CỰC" },
  { src:'/images/2.jpg', caption: "BLOODSHOT" },
  { src: '/images/3.jpg', caption: "NẮNG 3: LỜI HỨA CỦA CHA" },
  { src: '/images/4.jpg', caption: "CẬU BÉ MA 2" },
  { src: '/images/5.jpg', caption: "SẮC ĐẸP DỐI TRÁ" },
  { src: '/images/6.jpg', caption: "NGÔI LÀNG TỬ KHÍ" },
];

class Home extends React.Component {
  render(){
    return (
      <div>
        <div className="App">
        <HeroImage input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}/>
          </div>
        <SearchBar />
        <div className="content">
          <MovieThumb />
          <FourColGrid />
        </div>
        <Spinner />
        
      </div>
    );
  }
}

export default Home;
