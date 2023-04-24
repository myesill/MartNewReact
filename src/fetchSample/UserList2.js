 import React, { useEffect, useState } from 'react'

function UserList2() {
    
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);  

useEffect(() => {
    getData();
}, [])

const getData = ()=>{
    //HTTP GET metodu ile veeri çekiyorum...(default olarak fetch Get ile data çeker)
    fetch('https://northwind.vercel.app/api/categories')
    .then(response=>{
        return response.json()})
    .then(data=>{
        setTimeout(()=>{
            setUsers(data);
            setLoading(false);
        }, 2000);
    })
  .catch(()=>{
    setLoading(false);
  })
}

const removeUser =(id)=>{
    //Fetch ile web servisten mevcut kullanıcı silinecek
    let requestOption ={
        method:'DELETE'
    }
    fetch('https://northwind.vercel.app/api/categories/'+id, requestOption)
    .then(res=>res.json())
    .then((data)=>{
        let newUsers = users.filter(q=>q.id!==id)
        setUsers(newUsers);
    })
    
    

}

  return (<>
  {
    loading===true ? <span>Loading...</span> : 
    <table>
    <tr>
            <td>Id</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>
            <td>Remove</td>
    </tr>
    {
        users && users.map((item, key)=>{
           return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td><button onClick={()=>removeUser(item.id)}>Remove</button></td>
            </tr>
        })
    }
</table>
  }

  
  </>)
}

export default UserList2