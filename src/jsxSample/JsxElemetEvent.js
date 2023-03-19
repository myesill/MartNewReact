import React from 'react'

function JsxElemetEvent() {

const hello = ()=> {
  alert('Hello Jsx React')
}
    
  return (<>

    <button onClick={()=>alert('Hello JSX')} >Hello JSX</button>
    <button onClick={hello} >Hello Jsx-2</button>
    <button onClick={()=>hello()}>Hello Jsx-3</button>
  </>)
}

export default JsxElemetEvent