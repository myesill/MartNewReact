import React, { useState } from 'react'

function StateSample() {
  
    //name değişkenin adı. setName ise değişkeni değiştirecek metod. 
    //useState içerişinde 'Mahmut' ise değişkenin default değeri

    const [name, setName] = useState('Mahmut');
  
  return (<>
    <h1>{name}</h1>
    <button onClick={()=>setName('Sündüz')}>Change Name</button>


  </>)
}

export default StateSample