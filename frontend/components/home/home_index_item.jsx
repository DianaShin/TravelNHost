import React from 'react';

class HomeIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(){

  }

  render(){
    return (
      <li onClick={this.handleClick} id={this.props.destination} className='parent'>
        <p className="destination-name">{this.props.destination}</p>
        <img className="destination" src={this.props.src} />
      </li>
    );
  }
}

export default HomeIndexItem;
