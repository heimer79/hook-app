import { useRef } from "react"


export const FocusScreen = () => {


   const inputRef = useRef();

   const onClick = () => {
         inputRef.current.select();
         console.log(inputRef)   
        }


  return (
   <>
        <h1>FocusScreen</h1>
        <hr />

        <input 
        ref={inputRef}
        type="text" 
        placeholder="Ingrese su nombre"
        className="form-control"
        />

        <button
        className="btn btn-outline-primary mt-5"
        onClick={onClick}
        >
            Set Focus
        </button>
   </>


  )
}
