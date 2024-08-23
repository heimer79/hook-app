// Importa el hook personalizado useForm desde la carpeta hooks
import { useForm } from "../hooks/useForm";

// Componente que utiliza el hook personalizado useForm para gestionar el estado del formulario
export const FormWithCustomHook = () => {

    // Desestructura el estado del formulario y los manejadores de cambios del hook personalizado
    const { formState, onResetForm, onInputChange, username, email, password } = useForm({
        username: '', // Valor inicial del nombre de usuario
        email: '',    // Valor inicial del correo electrónico
        password: ''  // Valor inicial de la contraseña
    });






    // Descomenta para desestructurar username, email, y password directamente desde formState
    // const { username, email, password } = formState;

    // Descomenta para agregar hooks useEffect para diferentes dependencias
    /* 
    useEffect(
        () => {
            // Lógica del efecto aquí
        }, []
    );

    useEffect(
        () => {
            // Lógica del efecto aquí
        }, [formState]
    );

    useEffect(
        () => {
            // Lógica del efecto aquí
        }, [email]
    );
    */

    // Renderiza el formulario
    return (
        <>
            <h1>Formulario con Hook Personalizado</h1>
            <hr />

            {/* Campo de entrada para el nombre de usuario */}
            <input 
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {/* Campo de entrada para el correo electrónico */}
            <input 
                type="email"
                className="form-control mt-2" // Corregido el typo aquí
                placeholder="tu correo"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {/* Campo de entrada para la contraseña */}
            <input 
                type="password"
                className="form-control mt-2" // Corregido el typo aquí
                placeholder="Constraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />


            
            <button onClick={onResetForm} className="btn btn-primary mt-2">borrar</button>
            


        </>
    );
};
