import React from 'react';

class Candy extends React.Component {
  render() {
    const { candy } = this.props;
    return (
      <div className="Candy">
        <div>{candy.name}</div>
      </div>
    );
  }
}

export default Candy;
