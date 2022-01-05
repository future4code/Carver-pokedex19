import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { PokemonContainer, PokemonImage, ScreenContainer } from './styled';
import { Typography } from '@material-ui/core';
import Loading from '../../components/Loading/Loading'

const DetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const pokemon = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
    return (
        <ScreenContainer>
        {recipe ?
            <PokemonContainer>
            <PokemonImage src={recipe.image}/>
          <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
          <Typography align={'center'}>{recipe.description}</Typography>
           </PokemonContainer>
        :
           <Loading/>
        } 
        </ScreenContainer>
    )
}

export default DetailPage