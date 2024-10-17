import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import {MiguelRR} from 'milibreria';
import {MyFavourite} from 'milibreria';
import {MyFavouriteBorder} from 'milibreria';
import {MyCustomButton} from 'milibreria';

export default function Testimonio({imageUrl,imageAlt ,name, location, description, testimony }) {
    const[like, setLike] = useState(false);

    // Función añadida para comprobar el funcionamiento del boton
    const handleClick = () => {
      alert('Efectivamente, funciona!');
    };

    const handleLike = () => {
        setLike(like => !like);
      };
      
  return (
    
    <Card sx={{ width: 400, margin:2}}>
        <CardMedia
        component="img"
        title="React testimony"
        image={imageUrl}
        alt={imageAlt}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          
        </Typography>
        {/* Uso del componente MiguelRR el cual es un typography */}
        <MiguelRR
          text={`${name} en ${location}`}
          alignment="center"
          color="success"
          bottomMargin
          variant="h4"
        />
        <Typography variant="subtitle1" sx={{ color: 'ActiveBorder' }}>
          {description}
        </Typography>
        <Typography variant='body1'>
            {testimony}
        </Typography>
      </CardContent>
      <CardActions>
        {/* Uso de los componentes MyFavourite y MyFavouriteBorder para mostrar el icono de corazon lleno y vacío */}
          {like === true ? <MyFavourite iconColor='error'  onClick={handleLike}/>: <MyFavouriteBorder iconColor='error'  onClick={handleLike}/>}
         {/* Uso del componente MyCustomButton*/}
          <MyCustomButton
              text='Soy un botón'
              txtcolor='white'
              bgcolor='cyan'
              size='small'
              hoverColor='red'
              onClick={handleClick}
          />
      </CardActions>        
    </Card>
  );
}
