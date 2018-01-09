import React from 'react';

class HostShow extends React.Component {

  componentDidMount() {
    this.props.fetchHost(this.props.match.params.hostId);
  }

  render(){
    let firstName;
    let lastName;
    let gender;
    let age;

    if (this.props.host) {
      firstName = this.props.host.first_name;
      lastName = this.props.host.last_name;
      gender = this.props.host.gender;
      age = this.props.host.age;
    }

    return (
      <div className ="profile-box profile-details">
        { firstName } { lastName} <br />
        { age } { gender }
      </div>
    );
  }
}

export default HostShow;
