import React from 'react';
import { withRouter } from 'react-router-dom';

class HostsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDestination(this.props.match.params.destinationId);
  }

  render() {
    const hosts = [];
    Object.keys(this.props.hosts).forEach((key) => {
      hosts.push(<li key={key}> {this.props[key].first_name}</li>);
    });
    return (
      <div>
        {hosts}
      </div>
    );
  }
}

export default HostsIndex;
