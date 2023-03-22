
import React from 'react'

function AddButton(props) {
  return (<>
<button style={{color:'rebeccapurple', width:props.width, height:props.height}}>{props.title}</button>
  </>)
}

export default AddButton