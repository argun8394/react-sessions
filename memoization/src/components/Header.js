import React from 'react'

function Header({number, data}) {
//Appjs teki butona her tıklamada Header comp  de re render olur (React.memo kullanarak bunu önlemiş olduk)
  console.log('Header component re-rendered!')

  return (
    <div>
      Headr - {number} 
      <br/>
      <br/>
    <code>{JSON.stringify(data)}</code>

    </div>
    
  )
}

export default React.memo(Header);//Bu şekilde export ederek gereksiz re-render edilmesini önleriz ve componentlerimiz daha performanslı hale getirmiş oluruz
//export default Header// şeklinde export edersek number değerini her değişiklikte Headerda değişiklik olmamasına rağmen gereksiz yere"""re-render""" ediliyor.
