import React from 'react';
import { withRouter } from 'react-router-dom';
import HostIndexItem from './host_index_item';

class HostsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchDestination(this.props.match.params.destinationId);
  // }

  componentWillMount() {
    this.props.fetchDestination(this.props.match.params.destinationId);
  }

  render() {


  let hosts = Object.keys(this.props.hosts).map(id => this.props.hosts[id]);
  let hostItems = hosts.map((host) => {
    return <HostIndexItem key={host.id}
      destinationId={this.props.match.params.destinationId}
      firstname={host.first_name}
      lastname={host.last_name}
      age={host.age}
      gender={host.gender}
      imageUrl={host.image_url}
      />;
  });

    return (
        <ul>
        {hostItems}
        </ul>
    );
  }
}

export default withRouter(HostsIndex);




// const hosts = [];
// Object.keys(this.props.hosts).forEach((key) => {
//   let image_url = this.props.hosts[key].image_url;
//   hosts.push(<li key={key}>
//     <p className="host-name">
//       {this.props.hosts[key].first_name}
//     </p>
//     <img className="host-profile-pic" src={image_url} />
//   </li>);
// });
