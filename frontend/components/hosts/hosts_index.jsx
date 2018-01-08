import React from 'react';
import { withRouter } from 'react-router-dom';

class HostsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchDestination(this.props.match.params.destinationId);
  }

  render() {

    const hosts = [];
    Object.keys(this.props.hosts).forEach((key) => {
      let image_url = this.props.hosts[key].image_url;
      hosts.push(<li key={key}>
        <p className="host-name">
        {this.props.hosts[key].first_name}
        </p>
        <img className="host-profile-pic" src={image_url} />
      </li>);
    });
    return (
        <ul>
          {hosts}
        </ul>
    );
  }
}

export default withRouter(HostsIndex);
