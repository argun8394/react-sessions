import React, { Component } from 'react'
import User from './User';

class Users extends Component {
  render() {
    const { users} = this.props;//Destructing metodu ile users değerini alıyoruz
    // console.log(users);

    return (
      <div>
        {
            users.map(user =>{ /*map() fonk ile objeler üzerinde  gezinebileceğiz */
                return (//return ile her user ı sayfamıza yansıtmış oluyoruz
                     <User
                         key = {user.id}//iterator kullandığımızda uniq bir key vermemiz gerkiyor, yani virtual DOM hangi componenti güncelleyeceğini bilmesi için "key" prop unu kullanmamız gerekir, key eşsiz yani unique olması gerekir.
                         name = {user.name}
                         salary = {user.salary}
                         department = {user.department} 
                />)
            })
        }
      </div>
    )
  }
}

export default Users;
