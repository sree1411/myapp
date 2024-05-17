import { useReducer } from 'react';
import './App.css'
import { useEffect } from 'react';
 


//types

const INTI_START = "INTI_START"
const INTI_LOADING= "INTI_LOADING"
const INIT_ERROR="INIT_ERROR"


const initialState ={
  loading:true,
  data:null,
  error:null
}

const reducerFunction=(state, action)=>{
  switch(action.type){
    case INTI_START :
    return{...state, loading:true}

    case INTI_LOADING :
    return{...state, loading:false , data:action.payload}

    case INIT_ERROR :
      return{...state, loading:false , error:action.payload}
    default :
    return state;
  }
}   


function App(){


 const [state, dispatch] = useReducer( reducerFunction, initialState)
 


  const handlingApi = async()=>{
    try{
      dispatch({type: INTI_START})
      const response  = await fetch("https://jsonplaceholder.typicode.com/users")
      const newData =  await response.json()
      dispatch({type: INTI_LOADING, payload:newData})
    }catch(error){
      dispatch({type: INIT_ERROR , payload:error})
      console.log(error.message)
    }
 
  }

  useEffect(()=>{
    handlingApi()
  }, [])


  return(
    <>
      {
        state.loading  && (<p> data is loading </p>)
      }
      {
        state.data && (
          state.data.map((person)=>{
            return <> 
                    <li>{person.name}</li>
                   </>
          })
        )
      }
      {
        state.error && (<p> {alert(state.error)} heh he he</p>)
      }
    </>
  )
}
export default App;