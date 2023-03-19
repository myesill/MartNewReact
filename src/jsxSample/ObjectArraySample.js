
import React from 'react'
 
 function ObjectArraySample() {

    let webUser = [
        {
            name:'Mahmut',
            surname: 'Yesil',
            onlineStatus: false
        },
        {
            name:'Sündüz',
            surname:'Yesil',
            onlineStatus: false
        },
        {
            name:'Alperen',
            surname:'Yesil',
            onlineStatus: false
        },
        {
            name:'Ceyda',
            surname:'Yesil',
            onlineStatus: true
        }
    ]
//Eğer Kullanıcının Stausu ktrue ise 'KIRMIZI' olsun
   return (<>
        <table>
            <tr>
                <td>Name</td>     
                <td>Surname</td>  
                <td>Status</td>                 
            </tr>
          
                {
                    webUser.map((item, key) => {
                        if(item.onlineStatus === true){
                            return <tr style={{color:'red'}}>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                           <td>{item.onlineStatus.toString()}</td>
                        </tr>
                        }
                        else{
                            return <tr>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                         <td>{item.onlineStatus.toString()}</td>
                        </tr>
                        }
                        
                    })
                }
                
        </table>


   </>)
 }
 
 export default ObjectArraySample