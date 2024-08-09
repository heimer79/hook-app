import { useEffect } from "react"

export const Message = () => {


    useEffect(() => {
        console.log('Mensaje montado')
        return () => {
            console.log('Mensaje desmontado')
        }
    }, []
)






  return (
    <>
        
        <h3>
            Usuario ya existe

        </h3>
    
    
    </>
  )
}
