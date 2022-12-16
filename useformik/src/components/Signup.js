import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validations';

function Signup() {
  //useFormik ile daha sade bir yapı oluşturmuş olduk
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
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
        <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.firstName} /> {/* handleChange kullanmadığımızda inputa girilen değer value ya yansımaz boş görünür*/}
        {/*name initialValues taki firstName verilmelidir  */}
        {/*value={values.firstName} initialValue daki değerin yansıtılmasını sağlar*/}

        {errors.email && touched.email && (<div className="error">{errors.email}</div>)}

        <br />
        <br />

        <label>Password</label>
        <input name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
        {/* onBlur={handleBlur} sayesinde input üzerinde blur olup hata mesajını yakalamayı sağlar */}

        {errors.password && touched.password && (<div className="error">{errors.password}</div>)}
        <br />
        <br />

        <label >Confirm Password</label>
        <input name="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />

        {errors.confirmPassword && touched.confirmPassword && (<div className="error">{errors.confirmPassword}</div>)}
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