import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

export default function Testimonio({imageUrl,imageAlt ,name, location, description, testimony }) {
    const[like, setLike] = useState(false);

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
          {name} en {location}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'ActiveBorder' }}>
          {description}
        </Typography>
        <Typography variant='body1'>
            {testimony}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites" onClick={handleLike}>
          {like === true ? <FavoriteIcon sx={{color: 'red'}}/>: <FavoriteBorderIcon sx={{color: 'red'}}/>}
        </IconButton>
      </CardActions>
    </Card>
  );
}
