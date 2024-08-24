import React from 'react'; // Importa React para poder utilizar JSX y otras funcionalidades de React.
import { useFetch, useCounter } from '../hooks'; // Importa el hook personalizado `useFetch` desde el archivo donde se define.
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

// Componente `MultipleCustomHooks` que utiliza el hook `useFetch` para obtener datos desde una API.
export const MultipleCustomHooks = () => {

  const { counter, decrement, increment } = useCounter( 1 ); // Utiliza el hook `useCounter` para manejar un contador. 
  
  // Utiliza el hook `useFetch` pasando una URL específica para obtener datos sobre un Pokémon.
  // El hook retorna un objeto con las propiedades `data`, `hasError`, `isLoading`, y `error`.
  const { data, hasError, isLoading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  
  // Si hubo un error en la solicitud (`hasError` es `true`), muestra un mensaje de error.
  if (hasError) {
    return <p>Error: {error.message}</p>; // Renderiza un párrafo con el mensaje del error.
  }

  // Si los datos se han cargado correctamente y no hubo errores, renderiza la información del Pokémon.
  return (
    <>
      <h1>Información de Pokemon</h1> {/* Título principal del componente */}
      
      {
        isLoading 
        ? <LoadingMessage/> // Si `isLoading` es `true`, muestra un mensaje de "Cargando...".
        : ( <PokemonCard 
              {...data} 
              sprites={
                [
                  data?.sprites?.front_default,
                  data?.sprites?.back_default,
                  data?.sprites?.front_shiny,
                  data?.sprites?.back_shiny
                ]
              }        
            /> 
          ) // Si `isLoading` es `false`, muestra la información del Pokémon.
      }
      
      <h2>{data?.name}</h2> {/* Muestra el nombre del Pokémon si los datos existen (`data?.name`). */}
    
      <div className="d-flex justify-content-between gap-3" >
        <button className='btn btn-primary mt-2' onClick={() => counter > 1 ? decrement() : null}>
          Anterior
        </button>
        <button className='btn btn-primary mt-2' onClick={() => increment()}>
          Siguiente
        </button>
      </div>
      
     
      
    </>
  );
};
