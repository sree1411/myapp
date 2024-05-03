

// created the sample component and nested component
// be remember component name should be in the capital letter and
// when you call the nested component you have to mention like <Abc/>

const Abc = ()=>{
    return(
        <h1> abc component</h1>
    )
}
 
 
const Xyx = ()=>{
    return(
        <h1> xyz component </h1>
    )
}


function SampleComponent(){

    const a ="10"
    const b ='ten'

    return(
        <>
         <h1> sample component:{a}, {b} </h1>
          <Abc/>
          <Xyx/>
        </>
    )
}
export default SampleComponent;