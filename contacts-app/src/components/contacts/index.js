import {useState, useEffect} from 'react'
import Form from './form'
import List from './List/'

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname:"Mehmet", 
      phone_number:"4586957"
    },
    {
      fullname:"Nazlı", 
      phone_number:"5685485"
    }
  ]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts]);

  return (
    <div>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts