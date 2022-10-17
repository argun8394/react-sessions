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

  // constructor(props) {
  //   super(props);
  //   this.onClickEvent = this.onClickEvent.bind(this);//constructor içinde this bind etme
  // }

  //event
  onClickEvent(number,e){ //event i yakalamak için "e" yazıyoruz içine
                          //değer gönderirken önce gönderilen değer sonra event parametresi gönderiliyor
   
    //console.log(e.target);// e.target yazarak eventin nerde oluştuğu bilgisini alabiliriz
    //console.log("test");//tıklama ile consol a "test" yazdırıyoruz

    console.log(this)//buradaki this kendi metodlarımızda kullandığımızda undefined döner
                      //bu kullanımda this in nereyi gösterdiği belli değil(render metodu altında kullanırken miras aldığımızdan herhangi bir sıkıntı oluşmuyor)
                      //yani kendi metodlarımızda kullandığımız thi i bağlamamız gerekiyor yani bind etmemiz gerekiyor.
    console.log(number)
  }

  // onClickEvent = (e)=> { //arrow function ile metodu yazdığımızda bind etmemiz gerekmiyor
                            //çünkü arrow functionların normal functionlardan farkı otomatik olarak bind işlemi yapmalarıdır.
  //   console.log(this)
  // }

  render() {

    const {name, department, salary } = this.props;
    const {isVisible} = this.state; //isVisible değerini destructhing ile alabiliriz

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
             {/*<h4 className="d-inline" onClick={this.onClickEvent.bind(this)}>{name}</h4> {/*onClick={this.onClickEvent} eventi bu şekilde kullanıyoruz ---- onClick={this.onClickEvent.bind(this)} this i bind ederek
             event metodumuz this imize göre yani user objeme göre çalışsın demiş oluyoruz
             bind etme işlemini burada veya constructor da yapabiliriz*/} 
             <h4 className="d-inline" onClick={this.onClickEvent.bind(this,35)}>{name}</h4>{/*bind ile değer gönderebiliriz (35 değerini gönderdik) --- bind ın ilk anahtar kelimesi this olmalıdır*/}
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
