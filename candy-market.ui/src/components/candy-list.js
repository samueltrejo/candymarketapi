import React from 'react';

import Candy from './candy';

import candyData from '../data-request/candy-data'

class CandyList extends React.Component {
  state = {
    candyList: [],
    candy: {
      name: '',
      category: '',
      manufacturer: '',
    },
  }

  buildCandy = () => {
    return this.state.candyList.map((candy) => (
      <Candy key={candy.id} candy={candy} deleteCandy={this.deleteCandy} />
    ));
  }

  updateCandyForm = (field, event) => {
    const candy = { ...this.state.candy };
    candy[field] = event.target.value;
    this.setState({ candy })
  }

  updateName = event => this.updateCandyForm('name', event);
  updateCategory = event => this.updateCandyForm('category', event);
  updateManufacturer = event => this.updateCandyForm('manufacturer', event);

  addCandy = (event) => {
    event.preventDefault();
    const newCandy = { ...this.state.candy };
    const candyDefault = {
      name: '',
      category: '',
      manufacturer: '',
    }
    this.setState({ candy: candyDefault });
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
    const { candy } = this.state;
    return (
      <div className="container mt-5">
        <div className="lead">
          <span className="mr-3">Candy Market Bois!</span>

          <span>
            <i className="fas fa-plus pointer" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></i>
          </span>
          <form onSubmit={this.addCandy}>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
              <div className="form-group">
                <label htmlFor="candy-name">Name</label>
                <input type="text" className="form-control" id="candy-name" aria-describedby="emailHelp" placeholder="Enter Name" value={candy.name} onChange={this.updateName}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="candy-category">Category</label>
                <input type="text" className="form-control" id="candy-category" placeholder="Category" value={candy.category} onChange={this.updateCategory}/>
              </div>
              <div className="form-group">
                <label htmlFor="candy-manufacturer">Manufacturer</label>
                <input type="text" className="form-control" id="candy-manufacturer" placeholder="Manufacturer" value={candy.manufacturer} onChange={this.updateManufacturer}/>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Checkbox does nothing!</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>

        <div className="row mt-5">
          {this.buildCandy()}
        </div>
      </div>
    );
  }
}

export default CandyList;
