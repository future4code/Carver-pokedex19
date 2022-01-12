// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const Pokecard = () => {

//   // const pokedexPokemons = pokemon.map((prod) => {
//   //   return (
//   //     <CartItem key={pokemon.id} product={prod} removeFromCart={removeFromCart} />
//   //   );
//   // });
  
//   return (
//     <>
//     </>
//     // <ScreenContainer>
//     //   {cartCards}
//     //   <h1>Total: R${Number(priceToPay).toFixed(2)}</h1>
//     //   <button onClick={() => goToProductsScreen(history)}>
//     //   </button>
//     // </ScreenContainer>
//   )
// }

// export default Pokecard


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Pokecard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          title="Ditto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ditto
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Remover da Pokedex
        </Button>
        <Button size="small" color="primary">
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
export default Pokecard