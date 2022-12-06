import {useState, useEffect} from 'react'

const initialFormValues = {fullname:"", phone_number:""}
function Form({addContact, contacts}) {
  // console.log(addContact);

  const [form, setForm]=useState(initialFormValues);

  useEffect(()=>{ 
    setForm(initialFormValues);
  }, [contacts]) //contacts teki değişikliği useEffect ile yakalayarak form resetleme 

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();// form elementinin varsayılan davranışı olan veriyi bir endpoint e aktarıp sayfa yenileme işlemi yapar 
    //onSubmit anında bu varsayılan davranışı önlemek için e.preventDefault() yöntemi kullanılır

    if(form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
    // console.log(form)

    // setForm({fullname:"", phone_number:"",}) //form resetleme -- 1
    // setForm(initialFormValues) //form resetleme // form resetleme -- 2

  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="fullname" placeholder="Full Name" 
        onChange={onChangeInput}
        value={form.fullname}
        />
      </div>

      <div>
        <input name="phone_number" placeholder="Phone Number"
        onChange={onChangeInput}
        value={form.phone_number}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form