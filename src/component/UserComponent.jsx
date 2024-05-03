import React from 'react'

const UserComponent = (props) => {
  console.dir(props.user)
  return (
       <>
       {/* <h1>{props.user.firstname}</h1>
       <h1>{props.user.lastname}</h1>
       <h1>{props.user.email}</h1> */}
       {
        props.user.map((person)=>{
            return <>
                    <li >{person.firstname}</li>
                    <li>{person.lastname}</li>

                 </>
        })
       }
        
       </>
  )
}

export default UserComponent