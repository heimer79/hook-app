// Importa el hook useState desde React
import { useState } from "react";

// Define el hook personalizado useForm que acepta un objeto initialForm como argumento con un valor por defecto vacío
export const useForm = (initialForm = {}) => {
  
    // Utiliza el hook useState para crear un estado local formState inicializado con el valor de initialForm
    const [formState, setFormState] = useState(initialForm);

    // Desestructura username, email, y password desde formState (comentado, no se usa en este ejemplo)
    // const { username, email, password } = formState;

    // Define la función onInputChange que maneja los cambios en los inputs del formulario
    const onInputChange = ({ target }) => {
        const { name, value } = target; // Desestructura el nombre y el valor del target del evento
        setFormState({
            ...formState, // Copia el estado actual del formulario
            [name]: value // Actualiza el campo correspondiente con el nuevo valor
        });

        // Imprime en consola el nombre y el valor del input (comentado, no se usa en este ejemplo)
        // console.log({ name, value });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    // Retorna un objeto que incluye el estado del formulario, la función onInputChange y todos los campos del formulario
    return {
        ...formState, // Expande todos los campos del formulario para que estén disponibles directamente
        formState, // Incluye el estado del formulario completo
        onInputChange,// Incluye la función para manejar los cambios en los inputs
        onResetForm
    };
};
