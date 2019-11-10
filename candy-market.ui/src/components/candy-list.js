import React from 'react';

import Candy from './candy';

import candyData from '../data-request/candy-data'

class CandyList extends React.Component {
  state = {
    candyList: [],
  }

  buildCandy = () => {
    return this.state.candyList.map((candy) => (
      <Candy key={candy.id} candy={candy} deleteCandy={this.deleteCandy} />
    ));
  }

  addCandy = () => {
    const newCandy = {
      name: document.getElementById('candy-name').value,
      category: document.getElementById('candy-category').value,
      manufacturer: document.getElementById('candy-manufacturer').value,
    }

    candyData.addCandy(newCandy)
    .then(() => this.getCandy()).catch();
  }

  deleteCandy = (id) => {
    candyData.deleteCandy(id)
      .then(() => this.getCandy()).catch();
  }

  getCandy = () => {
    candyData.getCandy()
      .then(candyList => this.setState({ candyList }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.getCandy();
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="lead">
          <span className="mr-3">Candy Market Bois!</span>

          <span className="blerg">
  <i class="fas fa-plus pointer" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  </i>
</span>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
  <div class="form-group">
    <label for="candy-name">Name</label>
    <input type="text" class="form-control" id="candy-name" aria-describedby="emailHelp" placeholder="Enter Name"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="candy-category">Category</label>
    <input type="text" class="form-control" id="candy-category" placeholder="Category"/>
  </div>
  <div class="form-group">
    <label for="candy-manufacturer">Manufacturer</label>
    <input type="text" class="form-control" id="candy-manufacturer" placeholder="Manufacturer"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Checkbox does nothing!</label>
  </div>
  <button class="btn btn-primary" onClick={this.addCandy}>Submit</button>
  </div>
</div>
        </div>

        <div className="row mt-5">
          {this.buildCandy()}
        </div>
      </div>
    );
  }
}

export default CandyList;
