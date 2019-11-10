import React from 'react';
import './App.css';

import CandyList from './components/candy-list';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <CandyList />
      </div>
    )
  }
}

export default App;
