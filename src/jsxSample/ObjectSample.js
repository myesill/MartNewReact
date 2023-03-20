import React from 'react'

function ObjectSample() {

    let user = {
        name: 'Bruce',
        surname : 'Dickinson',
        group: {
            name: 'Iron Maiden',
            country: 'U.K.'
        }
    }

  return (<>
   
  <div>
    <p>Name:{user.name}</p>
    <p>Surname:{user.surname}</p>
    <p>Group Name:{user.group.name.toUpperCase()}</p>
    <p>Group Country:{user.group.country}</p>
  </div>




   </>)
}

export default ObjectSample