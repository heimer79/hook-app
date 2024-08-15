import { useEffect, useState } from "react"

export const Message = () => {

    const [ coords, setCoords ] = useState( {x:0, y:0 } )

    useEffect(
        () => {

       const onMouseMove = ({ x, y }) => {
           /* const coords = { x, y }  
           console.log(coords) */
           setCoords({ x, y })
       }

       /*  console.log('Mensaje montado') */

       window.addEventListener('mousemove', onMouseMove )

        return () => {
            /* console.log('Mensaje desmontado') */

            window.removeEventListener('mousemove', onMouseMove )
        }

    }, [] 
)






  return (
    <>
        
        <h3>
            Usuario ya existe

        </h3>

        { JSON.stringify( coords ) }
    
    
    </>
  )
}
