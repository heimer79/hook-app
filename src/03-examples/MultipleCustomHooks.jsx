import React from 'react'; // Importa React para poder utilizar JSX y otras funcionalidades de React.
import { useFetch } from '../hooks/useFetch'; // Importa el hook personalizado `useFetch` desde el archivo donde se define.

// Componente `MultipleCustomHooks` que utiliza el hook `useFetch` para obtener datos desde una API.
export const MultipleCustomHooks = () => {
  
  // Utiliza el hook `useFetch` pasando una URL específica para obtener datos sobre un Pokémon.
  // El hook retorna un objeto con las propiedades `data`, `hasError`, `isLoading`, y `error`.
  const { data, hasError, isLoading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/5');

  // Si los datos aún se están cargando (`isLoading` es `true`), muestra un mensaje de "Cargando...".
  if (isLoading) {
    return <p>Cargando...</p>; // Renderiza un párrafo con el texto "Cargando...".
  }

  // Si hubo un error en la solicitud (`hasError` es `true`), muestra un mensaje de error.
  if (hasError) {
    return <p>Error: {error.message}</p>; // Renderiza un párrafo con el mensaje del error.
  }

  // Si los datos se han cargado correctamente y no hubo errores, renderiza la información del Pokémon.
  return (
    <>
      <h1>Información de Pokemon</h1> {/* Título principal del componente */}
      <h2>{data?.name}</h2> {/* Muestra el nombre del Pokémon si los datos existen (`data?.name`). */}
    </>
  );
};
