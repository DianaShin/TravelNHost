import React from 'react';


class HostsIndex extends React.Component {
  constructor(props) {
    super(props);
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
