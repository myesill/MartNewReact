import React, { useEffect, useState } from 'react'

function EffectSample1() {

const [counter, setCounter] = useState(0);
const [counter2, setCounter2] = useState(0);

//maliyetli bir işlem
useEffect(() => {

    console.log('Bu kod satırı sadece component yüklendiğinde ÇALIŞIR!!! ');

 
}, [])

useEffect(() => {
  
console.log('counter2 state değişti');
  return () => {
    
  }
}, [counter2])




  return (<>
  
  <h1>{counter}</h1>
  <button onClick={()=>setCounter(counter + 1)}>Increase</button>
  <h1>{counter2}</h1>
  <button onClick={()=>setCounter2(counter2 + 1)}>Decrease</button>
  </>)
}

export default EffectSample1