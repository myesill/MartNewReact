import React, { useState } from 'react'

function ArraystateSample() {
  
    let cityList = ['İstanbul', 'Ankara', 'İzmir', 'Trabzon', 'Diyarbakır', 'Erzurum', 'Antalya'];
  
    const [cities, setCities] = useState(cityList);
/*
    const loadCity = ()=>{
        setCities(cityList);
    }
    aşağıyada bunu yazarsak aynı sonucu elde ederiz
      <button onClick={()=>loadCity()}>Load City</button>
    */

  return (<>
  <ul>
    {
        cities.map((item, key)=><li key={key}>{item}</li> )
    }
  </ul>

  <button onClick={()=>setCities([])}>Empty City</button>
  <button onClick={()=>setCities(cityList)}>Load City</button>

  
  </>)
}

export default ArraystateSample