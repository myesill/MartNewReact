import React, { useEffect, useState } from 'react'
import UsersTable from './UsersTable';

function UserList() {

const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(() => {
     
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
        })
    .then(data=>{
        setTimeout(() => {
            setUsers(data);
            setLoading(false);
        }, 2000);        
    })
    .catch(()=>{
        setLoading(false);
    })
    }, [])
    
  return (<>
  {
    loading===true ? <span>Loading...</span>: <UsersTable users={users}></UsersTable>
  }

  

  </>)
   
}

export default UserList