import React from 'react';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // this.props.fetchHost(this.props.currentUser.id);
  }

  render() {
    let firstName;
    if (this.props.currentUser) {
      firstName = this.props.currentUser.first_name;
    }
    return (
      <h1> Hi, {firstName}!</h1>
    );
  }
}


export default Dashboard;
