import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <nav>
          <div class="header-left">
            <img class="logo" src="http://res.cloudinary.com/ayoung0131/image/upload/v1514944664/backpackicon_htgwjb.svg" />
            <h1 class="brand-name">TRAVEL N HOST</h1>
          </div>
          <ul class="header-nav-buttons-list">
             <li class='header-nav-demo-button'>
               <button class='header-nav-demo-button'> DEMO</button>
             </li>
             <li class='header-nav-buttons-list-item'>
               <button class='header-nav-buttons-list-item'>SIGN UP</button>
             </li>
             <li class='header-nav-buttons-list-item'>
               <button class='header-nav-buttons-list-item'>LOG IN </button>
            </li>
          </ul>
        </nav>
        <div class="whitespace"> </div>
      </div>
    );
  }
}

export default Header;
