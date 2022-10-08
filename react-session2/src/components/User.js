import React, { Component } from 'react'
import PropTypes from 'prop-types';


 class User extends Component {

  //defaultProps un static olarakta bu şekilde kullanabiliriz
  static defaultProps = {
    name: "no information",
    department: "no information",
    salary: "no information"
  }

  render() {

  
    const {name, department, salary } = this.props;

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{name}</h4>
            <i className="fa-solid fa-trash-can" style={{cursor : 'pointer'}}></i>
        </div>
        <div className="card-body">
          <p className="card-text">Salary : {salary}</p>
          <p className="card-text">Department : {department}</p>

        </div>

        </div>

        
      </div>
    )
  }
}

//propTypes kullanımı
User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired
}



export default User;
