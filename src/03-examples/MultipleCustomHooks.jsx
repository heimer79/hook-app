import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

/*  fetch('https://pokeapi.co/api/v2/pokemon/1') */


  useFetch();

  return (
    <div>MultipleCustomHooks</div>
  )
}
