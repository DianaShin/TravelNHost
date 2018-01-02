import React from 'react';
import HomeIndex from './home_index';

class Home extends React.Component {
  render() {
    return (
      <div>
        <section id="home-splash-img">
          <h2>MEET LOCALS. TRAVEL THE WORLD.</h2>
          <h2>BE HOSPITABLE.</h2>
        </section>
        <section id="how-it-works">
            <section class="how-it-works-box">
              <img src="people-icon.png" />
              <h4>DISCOVER AMAZING PEOPLE</h4>
              <hr></hr>
              <p>Members of the TravelNHost community open their homes
                and share their lives. Connect and be inspired. </p>
            </section>
            <section class="how-it-works-box">
              <img src="couch-icon.png" />
              <h4>Find a Host</h4>
              <hr></hr>
              <p>Connect with hosts, and confirm your stay
                through the TravelNHost platform.
                Your stay with hosts is free.</p>
            </section>
        </section>
        <section class="favorite-destinations">FAVORITE DESTINATIONS
        </section>
        <HomeIndex />
      </div>
    );
  }

}

export default Home;
