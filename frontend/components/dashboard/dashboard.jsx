import React from 'react';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // this.props.fetchHost(this.props.user);
    // this.props.fetchHostings(this.props.user);
  }

  render() {
    let firstName;
    let lastName;
    let gender;
    let age;
    let destination;
    let image_url;

    if (this.props.currentUser) {
      firstName = this.props.currentUser.first_name;
      lastName = this.props.currentUser.last_name;
      gender = this.props.currentUser.gender;
      age = this.props.currentUser.age;
      destination = this.props.currentUser.destination_id;
      image_url = this.props.currentUser.image_url;
    }
    return (
      // <div>
      //   <h1> Hi, {firstName}!</h1>
      //   <h1> { lastName } </h1>
      //   <h1> { gender } </h1>
      //   <h1> { age } </h1>
      //   <img src={image_url} />
      //
      // </div>

      <content className="host-show-main dashboard-profile-box">
        <aside className="profile-box">
          <img className="profile-box-pic" src={image_url} />
          <p className="profile-header" > { firstName } { lastName}</p>
          <hr className="profile-box-underline"/>
          <table className="profile-details">
            <tbody>
              <tr>
                <td className="left"> <img className="profile-detail-icon" src="https://s3.amazonaws.com/travelnhost/icons/profile-gray1-01.svg"/> </td>
                <td className="right"> {gender}, {age}</td>
              </tr>
              <tr>
                <td className="left"> <img className="profile-detail-icon" src="https://s3.amazonaws.com/travelnhost/icons/pindrop-gray-01.svg"/></td>
                <td className="right"> { destination } </td>
              </tr>
              <tr>
                <td className="left"> <img className="profile-detail-icon" src="https://s3.amazonaws.com/travelnhost/icons/backpack.icon-gray-01.svg"/> </td>
                <td className="right accepting-guests">Accepting Guests</td>
              </tr>
            </tbody>
          </table>
          <p className="profile-about" >ABOUT ME</p>
          <hr className="profile-box-underline"/>
        </aside>
      </content>
    );
  }
}


export default Dashboard;
