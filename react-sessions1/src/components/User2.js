import React, { Component } from 'react'

 class User2 extends Component {
  render() {//render method u class component için kullanılır

    //Destructing  ES6 ile gelen bir kullanım şeklidir
    //Destructing kullanımı sayesinde daha temiz bir kullanım sağlıyor bize her satırda this.props ifadesini kullanmamış oluruz
    const {name, department, salary } = this.props;

    return (
      <div>
         <ul>
         <li>name : {name} </li> {/* with destructing */} 
            <li>Depatment : {department} </li> {/*  destructing ile kullanım */}
            <li>Salary : {salary} </li> {/*  destructing  ile kullanım*/}
            
            {/* <li>name : {this.props.name} </li>// class component kullanımı bu şekilde this ile propsu kullanıyoruz
            <li>Depatment : {this.props.department} </li>
            <li>Salary : {this.props.salary} </li> */}
        </ul>
      </div>
    )
  }
}
export default User2;
//User2 class component olduğundan props kullanımı this keyword u ile yapılır.
