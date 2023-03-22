import React from 'react'

function PropClickEventSample(props) {
    

  return (<>
    <button onClick={()=>props.hello()}>Hello Props!!</button>
  </>)
}

export default PropClickEventSample