import React from 'react';

import Candy from './candy';

import candyData from '../data-request/candy-data'

class CandyList extends React.Component {
  state = {
    candyList: [],
  }

  buildCandy = () => {
    return this.state.candyList.map((candy) => (
      <Candy key={candy.id} candy={candy} />
    ));
  }

  componentDidMount() {
    candyData.getCandy()
      .then(candyList => this.setState({ candyList }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        {this.buildCandy()}
      </div>
    );
  }
}

export default CandyList;
