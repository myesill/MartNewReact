import React from 'react'

function IfElseSample() {

let onlineStatus= false

  return (<>
    {
        onlineStatus === true ? <p>User Online!</p> : <p>User Offline!</p>
    }


   </>)
}

export default IfElseSample