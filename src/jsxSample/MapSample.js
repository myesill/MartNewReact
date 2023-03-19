import React from 'react'

function MapSample() {
  
    let countries = ['USA', 'Iran', 'Iraq', 'Turkiye', 'Russia', 'England'];

  return (<>
  
    <h1>Country List</h1>
    <ul>
        {/*Buradaki key elemanın index numarasını belirtir*/}
        {
            countries.map((item,key)=>{
                return <li>{item}</li>
            })

            //countries.map((item,key)=>(<li>{item}</li>)) bu da yukarıdaki ile aynı işlemi yapar
        }
    </ul>

  </>)
}

export default MapSample