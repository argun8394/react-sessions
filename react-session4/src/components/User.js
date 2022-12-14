import React, { Component } from 'react'

 class User extends Component {

    state = {
        isVisible : false
      }
     
onClickEvent = (e)=>{
    
    /*this.state = { //bu kullanım state i direk değiştirme işlemidir """react ta""" tavsiye edilmeyen bir kullanımdır. Değiştirme işlemini yapamıyoruz bu kullanımla
        isVisible : true
    }*/

    //setState() metdounu kullanarak bir toggle şeklinde uygulamış olduk state değişimini
    this.setState({
        isVisible : !this.state.isVisible
    })

console.log(this)
}
  render() {
    
    const {name, department, salary } = this.props;
    const {isVisible} = this.state; //isVisible değerini destructhing ile alabiliriz

    return (
        <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
             
             <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
            <i className="fa-solid fa-trash-can" style={{cursor : 'pointer'}}></i>
        </div>

     
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
