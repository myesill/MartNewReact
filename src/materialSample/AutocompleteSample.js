import React, { useEffect, useState } from 'react'
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import axios from 'axios';



function AutocompleteSample() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/categories')
      
        .then((res)=>{
            let autoData = [];
            
            res.data.forEach(element => {
                autoData.push({label:element.name, name:element.id})
            });
        setCategories(autoData);
        })
      
    }, [])
    

  return (<>
     <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={categories}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Categories" />}
    />
  </>)
}

export default AutocompleteSample