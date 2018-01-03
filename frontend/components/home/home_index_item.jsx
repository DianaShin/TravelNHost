import React from 'react';

class HomeIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(){

  }

  render(){
    return (
      <li onClick={this.handleClick} id={this.props.destination}>
        <img class="destination" src={this.props.src} />
        <p class="destination">{this.props.destination}</p>
      </li>
    );
  }
}

export default HomeIndexItem;
