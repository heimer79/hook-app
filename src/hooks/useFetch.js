import { useEffect, useState } from "react";



export const useFetch = () => {

    const [state, setState ] = useState( {
        data: null,
        loading: true,
        hasError: false,
        error: null
    } );

    useEffect( () => {

        getFetch();
        
    }, [])

    const getFetch = async ( url ) => {

        const resp = await  fetch('https://pokeapi.co/api/v2/pokemon/1')

        const data = await resp.json();


        console.log( data );





     
    }

    return {
       data: state.data,
       isloading: state.loading,
       hasError: state.hasError,
    };
}
