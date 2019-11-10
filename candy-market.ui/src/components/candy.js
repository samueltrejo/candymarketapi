import React from 'react';

class Candy extends React.Component {
  deleteCandy = () => {
    this.props.deleteCandy(this.props.candy.id);
  }

  render() {
    const { candy } = this.props;
    return (
      <div className="Candy col-md-6 col-lg-4 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div></div>
              <i className="fas fa-times pointer" onClick={this.deleteCandy}></i>
            </div>
            <div>{candy.name}</div>
            <div>{candy.manufacturer}</div>
            <div>{candy.category}</div>
            <div>{candy.date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Candy; 
