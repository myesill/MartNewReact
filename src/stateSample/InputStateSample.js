import React, { useState } from 'react'

function InputStateSample() {
 
    //Inputtaki datayı almak için input üzerine bir state bağlıyorum
    let metalBands = ['Moonspell', 'Rotting Charist', 'Furtherial'];
    const [metals, setMetals] = useState(metalBands);

    const [name, setName] = useState('Mahmut');
    //console.log('rendered');
  
 
    const newMetalBand=()=>{
         
           setMetals([...metals, name]);
           setName('');
    }

    const removeAllBands= ()=>{
        setMetals([]);
    }

    return (<>

    <ul>
        {
            metals.map((item, key)=>{
               return <li key={key}>{item}</li>
            })
        }
    </ul>
    <input type='text'value={name} onChange={(e)=>setName(e.target.value)} ></input>
    <button onClick={()=>newMetalBand()}>Add New Metal Band</button>

    <button onClick={()=>removeAllBands()}>Remove All Bands</button>

 
    </>)
}

export default InputStateSample