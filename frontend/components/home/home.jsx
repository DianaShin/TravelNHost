import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <section id="home-splash-img">
          <section className="home-splash-layer">
            <h2>MEET LOCALS. TRAVEL THE WORLD.</h2>
            <h2>BE HOSPITABLE.</h2>
          </section>
        </section>

        <section class="how-it-works">
      <h3>HOW IT WORKS</h3>
       <ul class="how-it-works-list">
         <li class="discover-people-box">
           <img class="people-icon" src="http://res.cloudinary.com/ayoung0131/image/upload/v1514942941/People-icon_iwpt7o.svg" />
           <h4 class="how-it-works-item-title">DISCOVER AMAZING PEOPLE</h4>
           <div class="short-break-line">
           </div>
           <p>Members of the TravelNHost community open their homes
              and share their lives. Connect and be inspired. </p>
         </li>

         <li class="find-a-host-box">
           <img class="couch-icon"
           src="http://res.cloudinary.com/ayoung0131/image/upload/v1514943080/couch_d01gkl.svg" />
           <h4 class="how-it-works-item-title">FIND A HOST</h4>
           <div class="short-break-line">
           </div>
           <p>Connect with hosts, and confirm your stay
                through the TravelNHost platform.
                Your stay with hosts is free.</p>
         </li>
       </ul>
    </section>
      </div>
    );
  }
}

export default Home;


// import React from 'react';
// import HomeIndex from './home_index';
// import {withRouter} from 'react-router';
//
// class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <section id="home-splash-img">
//           <h2>MEET LOCALS. TRAVEL THE WORLD.</h2>
//           <h2>BE HOSPITABLE.</h2>
//         </section>
//         <section id="how-it-works">
//             <section class="how-it-works-box">
//               <img src="people-icon.png" />
//               <h4>DISCOVER AMAZING PEOPLE</h4>
//               <hr></hr>
//               <p>Members of the TravelNHost community open their homes
//                 and share their lives. Connect and be inspired. </p>
//             </section>
//             <section class="how-it-works-box">
//               <img src="couch-icon.png" />
//               <h4>Find a Host</h4>
//               <hr></hr>
//               <p>Connect with hosts, and confirm your stay
//                 through the TravelNHost platform.
//                 Your stay with hosts is free.</p>
//             </section>
//         </section>
//         <section class="favorite-destinations">FAVORITE DESTINATIONS
//         </section>
//         <HomeIndex />
//       </div>
//     );
//   }
//
// }
//
// export default Home;
