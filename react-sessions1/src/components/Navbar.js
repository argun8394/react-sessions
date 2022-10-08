import React from 'react';
import PropTypes from 'prop-types'; //prop-types ların kullanımı için bu kütüphaneyi import etmemiz gerekir.


//Navbar bir function olduğundan dolayı props u otomatik olarak gönderecektir
function Navbar(props) { 
  return (
    <div>
       <h4> {props.title}</h4> {/*gönderilen key i props sayesinde kullanıyoruz */}
    </div>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired
  // ismi title olan ve propTypes ı string olan ve mutlaka gönderilmesi gereken bir props u göndermemiz gerekiyor bu tanımlama doğrultusunda
  //isRequired olduğundan title propsu gönderilmezse hata oluşur
}

//default props kullanımı --> bu durumda props gönderilmediği durumda default props kullanılır 
Navbar.defaultProps = {
  title : "Default App"
}

export default Navbar;
