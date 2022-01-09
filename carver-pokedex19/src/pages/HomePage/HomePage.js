import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {CardContainer, CardFoto, FormContainer} from './styled'
import Button from '@material-ui/core/Button';
import { BASE_URL } from '../../constants/URL';


export default function HomePage() {
  const [pokemons, setPokemons]= useState([]);
  
  useEffect(() => {
    cardPokemon()
  }, []);

  const cardPokemon = () => {
    const list=[];
    for(let i = 1; i <= 20; i++){
    axios.get(`${BASE_URL}pokemon/${i}`)
    
    .then((res) => {
      list.push(res.data)
      if(list.length===20){
      setPokemons(list)
      }

    })
    .catch((err) => 
    console.log(err.message))
    }
  };

  const details = pokemons && pokemons.map((pokemon) => {
    return <CardContainer key={pokemon.id}>
    <h2>{pokemon.name}</h2>
    <CardFoto>
    <img src={pokemon.sprites.front_default} alt=''/>
    </CardFoto>
    <Button>Adicionar a Pokédex</Button>
    <Button>Ver Detalhes</Button>
    </CardContainer>
    
  })

  return (
      <FormContainer>
      <h2>Lista de Pokémons</h2>
      {details}
      </FormContainer>
      

  );
}

