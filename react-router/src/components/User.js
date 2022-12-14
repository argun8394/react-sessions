import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';


function User() {
    const[loading, setLoading] = useState(true)

    const [user, setUser]= useState({});

    const {id} = useParams();//url paramtre kullanımı için 

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) =>setUser(res.data))
        .finally( () =>setLoading(false))        
    }, [id])//id ye bağımlılık vererek her id değişiminde useEffect tetiklenecek
    
  return (
    <div>
        
        <h1>User Detail</h1>
        {loading && <div>Loading...</div>}
        <code>{!loading && JSON.stringify(user)}</code>
    </div>
  )
}

export default User