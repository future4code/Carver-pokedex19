import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Pokecard = () => {

  const cartCards = cart.map((prod) => {
    return (
      <CartItem key={prod.id} product={prod} removeFromCart={removeFromCart} />
    );
  });
  
  return (
    <ScreenContainer>
      {cartCards}
      <h1>Total: R${Number(priceToPay).toFixed(2)}</h1>
      <button onClick={() => goToProductsScreen(history)}>
        Continuar Comprando
      </button>
    </ScreenContainer>
  )
}

export default Pokecard
