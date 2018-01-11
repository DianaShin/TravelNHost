import React from 'react';
import MyTravelPlansIndex from './my_travel_plans_index';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchHostings(this.props.currentUser.id);
  }

  render() {
    let firstName;
    let lastName;
    let gender;
    let age;
    let destination;
    let country;
    let image_url;

    if (this.props.currentUser) {
      firstName = this.props.currentUser.first_name;
      lastName = this.props.currentUser.last_name;
      gender = this.props.currentUser.gender;
      age = this.props.currentUser.age;
      destination = this.props.currentUser.destination.name;
      image_url = this.props.currentUser.image_url;
      country = this.props.currentUser.destination.country;
    }

    let  myHostings = Object.keys(this.props.hostings).map(
      id => this.props.hostings[id]
    );

    let myTravelPlans = myHostings.filter(hosting => {
      (hosting.guest_id === this.props.currentUser.id) &&
      (hosting.status === "accepted");
    });

    let myTravelPlanItems = myTravelPlans.map(travelPlan => {
      return <DashboardHostingItem
                hosting={travelPlan}
                type="myTravelPlan"
                />;
      });

    let myGuests = myHostings.filter(hosting => {
      (hosting.host_id === this.props.currentUser.id) &&
      (hosting.status === "accepted");
    });

    let myGuestItems = myGuests.map(myGuest => {
      return <DashBoardHostingItem
                hosting={myGuest}
                type="myGuest"
                />;
    });

    return (

      <content>
        <aside className="profile-box dashboard-profile-box">
          <img className="profile-box-pic" src={image_url} />
          <p className="profile-header" > { firstName } { lastName}</p>
          <hr className="profile-box-underline"/>
          <table className="profile-details">
            <tbody>
              <tr>
                <td className="left"> <img className="profile-detail-icon" src="https://s3.amazonaws.com/travelnhost/icons/profile-gray1-01.svg"/> </td>
                <td className="right"> { gender }, { age }</td>
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
          <p className="profile-about" >ABOUT ME</p>
          <hr className="profile-box-underline"/>
        </aside>
        <main>
          <section className="my-travel-plans">
            <div className="travel-plans-header">

            </div>
            <div className="my-guests-header">

            </div>
          </section>
        </main>
      </content>
    );
  }
}


export default Dashboard;
