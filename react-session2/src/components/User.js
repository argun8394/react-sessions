import React, { Component } from 'react'

//satate vermenin 2 yolu var 1-constructor içinde 2-bu class ın en tepesinde oluşturmak
 class User extends Component {
  state = {
    isVisible : false
  }

  // constructor (props){
  //   super(props);///inheritance ilişkisi

  //   this.state = {
  //     isVisible: false //görünürlük için
  //   }
  // }
  render() {

    const {name, department, salary } = this.props;
    const {isVisible} = this.state; //isVisible değerini destructhing ile alabiliriz

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{name}</h4>
            <i className="fa-solid fa-trash-can" style={{cursor : 'pointer'}}></i>
        </div>

      {/* isVisible değeri tru olduğunda card-body görünür olur */}
        {
          isVisible ? <div className="card-body">
          <p className="card-text">Salary : {salary}</p>
          <p className="card-text">Department : {department}</p>
         
        </div> : null
        }

        
        </div>        
      </div>
    )
  }
}

export default User;
