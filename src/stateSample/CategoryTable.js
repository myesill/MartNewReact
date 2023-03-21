import React, { useState } from 'react'
import { categories } from '../data/categories'

function CategoryTable() {
    
const [categoryList, setCategoryList] = useState(categories);
//const [searchByName, setSearchByName ] = useState('');

const removeAll = ()=>{
    setCategoryList([])
}
const removeItem = (id)=>{
    let newCategoryList = categoryList.filter(item=>item.id !== id);
    setCategoryList(newCategoryList);
}
const searchCategories = (data)=>{
  let searchData = data.toLowerCase().trim();
  let newCategories = categories.filter(q=>q.name.toLowerCase().includes(searchData));
  setCategoryList(newCategories);
}
const orderByAsc = ()=>{
  let sortCategories = categoryList.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
setCategoryList([...sortCategories]);
}
const orderByDsc = ()=>{
  let sortCategories = categoryList.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return 1;
    }
    if (fa > fb) {
        return -1;
    }
    return 0;
});
setCategoryList([...sortCategories]);
}
const loadData = ()=>{
  setCategoryList(categories);
}

 return (<>
  
  <div>
    <input type='text'   onChange={(e)=>searchCategories(e.target.value)} placeholder='Search by name...'></input>   
  </div>
  <div>
    <button onClick={()=>orderByAsc()} >Order By Asc</button>
    <button onClick={()=>orderByDsc()}>Order By Des</button>
    <button onClick={()=>loadData()}>Load Data</button>
  </div>
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