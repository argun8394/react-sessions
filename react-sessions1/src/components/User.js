import React from 'react'

//With arrow function 


 const User = (props) => {
  return (
    <div>
        <ul>
            <li>name : {props.name} </li>
            <li>Depatment : {props.department} </li>
            <li>Salary : {props.salary} </li>
        </ul>

    </div>
  )
}

export default User;


//propslar bir componentten başka bir component e veri aktarımı için kullandığımız yapılardır.
//props kullanımı ile dinamik bir veri aktarımı yapmış oluyoruz
//ve bu veri aktarımıyla birlikte componenti başlatmış oluyoruz yani render etmiş oluruz
