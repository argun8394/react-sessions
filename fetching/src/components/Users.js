import React, { useEffect, useState } from 'react'

import axios from "axios";


function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /*
    //Component ilk yüklendiği zaman sadece 1 kere fetch işlemi yapmak için, fetch işlemi useEffectiçinde yapıldı. useEffect dışında yaparsa component her render olduğunda yapar. Bunun önüne geçmek için useEffect içinde yapılmalı.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => (res).json())
        .then((data) => setUsers(data))        
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
        
    },[])
    */

    //with axios
    useEffect(() => {
       
        axios('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))    
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));        
    },[users])



  return (
    <div>
        <h1>Users</h1>

        {isLoading && <div>Loading...</div>}
        {users.map((user) =>(
            <div key={user.id}>{user.name}</div>
        ))}
    </div>
  )
}

export default Users