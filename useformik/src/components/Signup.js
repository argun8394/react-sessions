import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validations';

function Signup() {
    //useFormik ile daha sade bir yapı oluşturmuş olduk
   const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
       email: '',
       password: '',
       confirmPassword: '',  
     },
     onSubmit: (values) => {
        console.log(values);
     },
     validationSchema
   });
  return (
    <div>
        
        <h1>Sign Up</h1>
        
          <form onSubmit={handleSubmit}>
          <label >Email</label>
          <input name="email" onChange={handleChange} value={values.firstName}/> {/* handleChange kullanmadığımızda inputa girilen değer value ya yansımaz boş görünür*/}
           {/*name initialValues taki firstName verilmelidir  */}
           {/*value={values.firstName} initialValue daki değerin yansıtılmasını sağlar*/}
          <br />
          <br />

          <label>Password</label>
          <input name="password" onChange={handleChange} value={values.password}/>
          <br />
          <br />

          <label >Confirm Password</label>
          <input name="confirmPassword" onChange={handleChange} value={values.confirmPassword}/>
          <br />
          <br />

          {/* <span>Male</span>
          <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === 'male'}/> {/*checked={values.gender === 'male'} initialValue da verilen değerin işlenmiş halde gelmesini sağlar */}

         {/* <span>Female</span>
          <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === 'female'}/> */}    
         

          <button type="submit">Submit</button>
          <br />
          <br />

          {JSON.stringify(values)}

        </form>
              
    </div>
  )
}

export default Signup