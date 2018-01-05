import React from 'react';
import HomeIndexItem from './home_index_item';

class HomeIndex extends React.Component {
  render(){
    const favoriteDestinations = {
      "Istanbul": "http://res.cloudinary.com/ayoung0131/image/upload/v1514924388/Istanbul4_qqaha0.jpg",
      "Cappadocia": "http://res.cloudinary.com/ayoung0131/image/upload/v1514924400/cappadocia_dkbzsz.jpg",
      "Dubrovnik": "http://res.cloudinary.com/ayoung0131/image/upload/v1514924422/dubrovnik_tjqynb.jpg",
      "Chefchaouen": "http://res.cloudinary.com/ayoung0131/image/upload/v1514924456/Chefchaouen-Morocco-2_lh8qpd.jpg",
      "Mostar": "http://res.cloudinary.com/ayoung0131/image/upload/v1514924482/mostar_g7hqyj.jpg",
      "Granada": "http://res.cloudinary.com/ayoung0131/image/upload/v1514924497/granada_cjxlw5.jpg",
      "Barcelona": "http://res.cloudinary.com/ayoung0131/image/upload/v1514924538/Barcelona_cropped2_mdzufq.jpg",
      "Cairo": "http://res.cloudinary.com/ayoung0131/image/upload/v1514924980/pyramids_ypklen.jpg",
      "Petra": "http://res.cloudinary.com/ayoung0131/image/upload/v1514931849/Petra_camel.resized4_tvubhr.png",
      "Sarajevo": "http://res.cloudinary.com/ayoung0131/image/upload/v1514925447/sarajevo3_qcjoez.jpg",
      "Marrakesh": "http://res.cloudinary.com/ayoung0131/image/upload/v1514925132/Marrakech-shop-souk-xlarge_ryp2zr.jpg",
      "Prague": "http://res.cloudinary.com/ayoung0131/image/upload/v1514925141/Prague1_vmtfxk.jpg",
      "London": "http://res.cloudinary.com/ayoung0131/image/upload/v1514948702/big-ben-at-night-01_ojeug0.jpg",
      "Venice": "http://res.cloudinary.com/ayoung0131/image/upload/v1514925175/venice9_b6aqbs.jpg",
      "Copenhagen": "http://res.cloudinary.com/ayoung0131/image/upload/v1514925320/copenhagen_cropped3_fhltfg.jpg",
      "Amsterdam": "http://res.cloudinary.com/ayoung0131/image/upload/v1514925299/amsterdam2_af1hog.jpg",
      "Stockholm": "http://res.cloudinary.com/ayoung0131/image/upload/v1514949120/stockholm_final_cover2_oqepxq.jpg"
    };

  return(
        <div>
          <div class="destinations-index">
          <ul class="destinations-row-1 destinations-row">
              {Object.keys(favoriteDestinations).slice(0, 3).map((destination, idx) => (
             <HomeIndexItem destination={destination} key={idx} src={favoriteDestinations[destination]}/>
           ))}
          </ul>
          <ul class="destinations-row-2 destinations-row">
              {Object.keys(favoriteDestinations).slice(3, 7).map((destination, idx) => (
             <HomeIndexItem destination={destination} key={idx} src={favoriteDestinations[destination]}/>
           ))}
          </ul>
          <ul class="destinations-row-3 destinations-row">
              {Object.keys(favoriteDestinations).slice(7, 10).map((destination, idx) => (
             <HomeIndexItem destination={destination} key={idx} src={favoriteDestinations[destination]}/>
           ))}
          </ul>
          <ul class="destinations-row-4 destinations-row">
              {Object.keys(favoriteDestinations).slice(10, 14).map((destination, idx) => (
             <HomeIndexItem destination={destination} key={idx} src={favoriteDestinations[destination]}/>
           ))}
          </ul>
          <ul class="destinations-row-5 destinations-row">
              {Object.keys(favoriteDestinations).slice(14, 17).map((destination, idx) => (
             <HomeIndexItem destination={destination} key={idx} src={favoriteDestinations[destination]}/>
           ))}
          </ul>
          </div>
        </div>
      );
    }

  }

  export default HomeIndex;
