import { Avatar, Button, Chip } from '@mui/material'
import React from 'react'

function DataDisplay() {
const handleClick =()=>{

}
    
  return (<>
  <Button color='error' variant='outlined'>HELLO WORLD</Button>
  <Avatar>M</Avatar>
 
  <Chip label="Clickable" onClick={handleClick} />
  <Chip label="Clickable" variant="outlined" onClick={handleClick} />
  </>)
}

export default DataDisplay