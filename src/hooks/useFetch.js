import { useEffect, useState } from "react";

// Hook personalizado `useFetch` que toma una URL como argumento.
export const useFetch = (url) => {
  
  // Estado local que maneja los datos, estado de carga, errores, etc.
  const [state, setState] = useState({
    data: null,         // Inicialmente, no hay datos (null).
    loading: true,      // La solicitud está en proceso de carga (true).
    hasError: false,    // No hay error al inicio (false).
    error: null         // No hay detalles de error al inicio (null).
  });

  // `useEffect` para ejecutar la función `getFetch` cuando el componente se monta o la URL cambia.
  useEffect(() => {
    
    // Función asíncrona que realiza la solicitud de datos a la URL proporcionada.
    const getFetch = async () => {
      
      // Reinicia el estado antes de hacer la solicitud.
      setState({
        data: null,         // Reinicia los datos a null.
        loading: true,      // Indica que la solicitud está cargando.
        hasError: false,    // Reinicia el estado de error a false.
        error: null         // Reinicia los detalles del error a null.
      });

      try {
        // Realiza la solicitud `fetch` a la URL proporcionada.
        const resp = await fetch(url);

        // Simula una demora artificial de 1 segundo antes de procesar la respuesta.
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Verifica si la respuesta no es exitosa (código HTTP fuera del rango 2xx).
        if (!resp.ok) {
          // Lanza un error que será capturado en el bloque `catch`.
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        // Si la respuesta es exitosa, convierte los datos a formato JSON.
        const data = await resp.json();

        // Actualiza el estado con los datos obtenidos y marca `loading` como false.
        setState({
          data,              // Almacena los datos obtenidos en el estado.
          loading: false,    // Indica que la solicitud ha terminado de cargar.
          hasError: false,   // No hay error en la solicitud.
          error: null        // No hay detalles de error.
        });

      } catch (error) {
        // Si ocurre un error en la solicitud `fetch`, actualiza el estado con los detalles del error.
        setState({
          data: null,         // No hay datos debido al error.
          loading: false,     // La solicitud ha terminado, pero con error.
          hasError: true,     // Indica que hubo un error en la solicitud.
          error: {
            message: error.message,  // Almacena el mensaje del error.
          },
        });
      }
    };

    // Verifica si se ha proporcionado una URL y ejecuta `getFetch`.
    if (url) {
      getFetch();
    }
  }, [url]); // Dependencia del efecto: se vuelve a ejecutar si `url` cambia.

  // Retorna el estado actual para que pueda ser utilizado por el componente que usa este hook.
  return {
    data: state.data,       // Datos obtenidos de la solicitud `fetch`.
    isLoading: state.loading, // Estado de carga (true si está cargando).
    hasError: state.hasError, // Indica si hubo un error en la solicitud.
    error: state.error,       // Detalles del error, si existe.
  };
};
