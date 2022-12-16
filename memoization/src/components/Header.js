import React from 'react'

function Header() {

  console.log('Header component re-rendered!')

  return (
    <div>Headr</div>
  )
}

export default React.memo(Header);//Bu şekilde export ederek gereksiz re-render edilmesini önleriz
//export default Header// şeklinde export edersek number değerini her değişiklikte Headerda değişiklik olmamasına rağmen gereksiz yere"""re-render""" ediliyor.