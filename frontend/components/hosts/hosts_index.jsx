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
      hosts.push(<li key={key}> {this.props.hosts[key].first_name}</li>);
    });
    return (
        <ul>
          {hosts}
        </ul>
    );
  }
}

export default withRouter(HostsIndex);
