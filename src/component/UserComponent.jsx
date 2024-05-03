import React from 'react'

const UserComponent = (props) => {
  console.dir(props)
  return (
       <>
       <h1>{props.user.firstname}</h1>
       <h1>{props.user.lastname}</h1>
       <h1>{props.user.email}</h1>
       
        
       </>
  )
}

export default UserComponent