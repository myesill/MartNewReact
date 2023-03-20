import React, { useState } from 'react'
import { categories } from '../data/categories'

function CategoryTable() {
    
const [categoryList, setCategoryList] = useState(categories);

const removeAll = ()=>{
    setCategoryList([])
}
const removeItem = (id)=>{
    let newCategoryList = categoryList.filter(item=>item.id !== id);
    setCategoryList(newCategoryList);
}
 
 return (<>
  
  
  <table>
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Description</td>        
    </tr>
    {
    categoryList && categoryList.map((item,key)=>{
        return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>   
            <td><button onClick={()=>removeItem(item.id)}>Remove</button></td>         
        </tr>
    })

  }
  </table>
  
  <div>
    <button onClick={()=>removeAll()}>Remove All</button>
  </div>

  </>)
}

export default CategoryTable