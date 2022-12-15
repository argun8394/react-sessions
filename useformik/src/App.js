import './App.css';
import { useFormik } from 'formik';


function App() {
  
  //useFormik ile daha sade bir yapı oluşturmuş olduk
   const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
       firstName: 'ali',
          lastName: 'argun',
          email: 'argun23@gmail.com',
          gender: 'male',
          hobbies: [],
          country: ''
     },
     onSubmit: (values) => {
        console.log(values);
     },
   });
  return (
    <div className="App">
      <h1>Sign Up</h1>
        
          <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" onChange={handleChange} value={values.firstName}/> {/* handleChange kullanmadığımızda inputa girilen değer value ya yansımaz boş görünür*/}
           {/*name initialValues taki firstName verilmelidir  */}
           {/*value={values.firstName} initialValue daki değerin yansıtılmasını sağlar*/}
          <br />
          <br />

          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" onChange={handleChange} value={values.lastName}/>
          <br />
          <br />

          <label htmlFor="email">Email</label>
          <input name="email" onChange={handleChange} value={values.email}/>
          <br />
          <br />

          <span>Male</span>
          <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === 'male'}/> {/*checked={values.gender === 'male'} initialValue da verilen değerin işlenmiş halde gelmesini sağlar */}

          <span>Female</span>
          <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === 'female'}/>

          <br />
          <br />

          <div>
            <input type="checkbox" name="hobbies" value="Football"  onChange={handleChange}/>
            Football
          </div>
          <div>
            <input type="checkbox" name="hobbies" value="Cinema"  onChange={handleChange}/>
            Football
          </div>
          <div>
            <input type="checkbox" name="hobbies" value="Travel"  onChange={handleChange}/>
            Travel
          </div>

          <br />
          <br />

          <select name="country" value={values.country} onChange={handleChange}>
            <option value="turkey">Turkey</option>
            <option value="england">England</option>
            <option value="usa">USA</option>
          </select>

          <br />
          <br />

          <button type="submit">Submit</button>
          <br />
          <br />

          {JSON.stringify(values)}

        </form>
              
    </div>
  );
}

export default App;