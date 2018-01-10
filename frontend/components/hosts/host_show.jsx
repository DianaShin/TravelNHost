import React from 'react';
import RequestForm from './request_form_container';

class HostShow extends React.Component {
  constructor(props){
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentDidMount() {
    this.props.fetchHost(this.props.match.params.hostId);
  }

  handleFetch(){
    this.props.fetchHostings({
      hosting: {
        host_id: this.props.currentUser.id
      }
    });
  }

  render(){
    let firstName;
    let lastName;
    let gender;
    let age;
    let image_url;
    let destination;
    let country;

    if (this.props.host) {
      firstName = this.props.host.first_name;
      lastName = this.props.host.last_name;
      gender = this.props.host.gender;
      age = this.props.host.age;
      image_url = this.props.host.image_url;
      destination = this.props.destination.name;
      country = this.props.destination.country;
    }

    return (
      <content className="host-show-main">
        <aside className="profile-box">
          <img className="profile-box-pic" src={image_url} />
          <p className="profile-header" >{ firstName } { lastName}</p>
          <hr className="profile-box-underline"/>
          <table className="profile-details">
            <tbody>
              <tr>
                <td className="left"> <img className="profile-detail-icon" src="https://s3.amazonaws.com/travelnhost/icons/profile-gray1-01.svg"/> </td>
                <td className="right"> {gender}, {age}</td>
              </tr>
              <tr>
                <td className="left"> <img className="profile-detail-icon" src="https://s3.amazonaws.com/travelnhost/icons/pindrop-gray-01.svg"/></td>
                <td className="right"> { destination }, { country } </td>
              </tr>
              <tr>
                <td className="left"> <img className="profile-detail-icon" src="https://s3.amazonaws.com/travelnhost/icons/backpack.icon-gray-01.svg"/> </td>
                <td className="right accepting-guests">Accepting Guests</td>
              </tr>
            </tbody>
          </table>
          <p className="profile-about" >ABOUT</p>
          <hr className="profile-box-underline"/>
        </aside>
        <main className="host-request-content">
          <RequestForm />
          <button onClick={this.handleFetch}>Click me</button>
        </main>
      </content>
    );
  }
}

export default HostShow;
