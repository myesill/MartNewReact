
import { useState } from 'react'
import { suppliers } from '../data/suppliers'
import SupplierItem from './SupplierItem';

function SupplierList() {
  

const [SupplierList, setSupplierList] = useState(suppliers);

const deleteItem = (id)=>{
    let newSuppliers = SupplierList.filter(q=>q.id !== id);
    setSupplierList(newSuppliers);
}

  return (<>
        
        {
            SupplierList && SupplierList.map((item,key)=>{
                return <SupplierItem supplier={item} deleteItem = {deleteItem}></SupplierItem>
            })
        }
   
  
  </>)
}

export default SupplierList