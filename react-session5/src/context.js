import React, { Component } from 'react'

const UserContext = React.createContext();

export class UserProvider extends Component { //default olarak export etmiyoruz
    state = {
        users: [
          {
            id:1,
            name : "Mustafa Murat",
            salary : "5000",
            department : "Bilişim"
          },
          {
            id:2,
            name : "Kemalettin Şen",
            salary : "7000",
            department : "Pazarlama"
          },
          {
            id:3,
            name : "Mahmut Pek",
            salary : "4000",
            department : "Üretim"
          }
        ]
      }
  render() {
    return (
        //provider ile sarmallama yapıyoruz
      <UserContext.Provider value={this.state}>//burada div yerine UserContext.Provider döneriz
        {this.props.children}

      </UserContext.Provider>
    )
  }
}

//yukarıdaki value de bulanan state verilerini kullanmak için consumer oluşturuyoruz
const UserConsumer = UserContext.Consumer;//UserContext ten alıyoruz consumer ı

export default UserConsumer;//UserConsumer olarak export ediyoruz









/*burada 2 yapı kullanacağız 
1 provider(sağlayıcı)
2 consumer(tüketici) -->provider tarafından gönderilen verileri kullanmamızı sağlar
bu yapılar contextApı içerisinde gelen 2 JS objesidir
*/