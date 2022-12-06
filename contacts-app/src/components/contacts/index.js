import {useState, useEffect} from 'react'
import Form from './form'
import List from './List/'

function Contacts() {

  const [contacts, setContacts] = useState([]);

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