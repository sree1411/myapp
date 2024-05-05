import React from 'react'
import { useData } from '../useContext/ExampleContext'

const FirstComponent = () => {

 const {name, userDetails, studentList, count, inc, dec} = useData()

  console.dir(studentList, "stt")
  console.dir(userDetails, "userDetails")



  return (
      <>
      


     <h1> Count is:{count}</h1>
     <button onClick={inc}> inc</button>
     <button onClick={dec}> dec</button>



      <div>FirstComponent :
         {name}is going to school
    </div>
      {
       
        <li>Name is :{userDetails.name}</li>
      }
      {
        <li>Name is :{studentList[0].age}</li>
        
      }
      {
       studentList.map((student)=>{
        return <>
                   <li>{student.name}</li>
              </>
       })
      }
      
      </>
  )
}

export default FirstComponent