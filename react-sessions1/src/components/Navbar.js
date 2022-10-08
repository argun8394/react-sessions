import React from 'react'


//Navbar bir function olduğundan dolayı props u otomatik olarak gönderecektir
function Navbar(props) { 
  return (
    <div>
       <h4> {props.title}</h4> {/*gönderilen key i props sayesinde kullanıyoruz */}
    </div>
  )
}

export default Navbar;
