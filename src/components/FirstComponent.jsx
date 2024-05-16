import { UseCart } from "../useContext/CartContext";
import SecondComponent from "./SecondComponent";

function FirstComponent(){

    const {name} = UseCart()

   const studentName = "sreekanth"


    return(
        <>
         <h1>FirstComponent :{name}</h1>
         <SecondComponent studentName={studentName} />
        </>
    )
}
export default FirstComponent;