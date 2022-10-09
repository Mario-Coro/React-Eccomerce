import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';
import "./item.css";
import { Link } from 'react-router-dom';


const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 250}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="220"
        image={product.img}
        alt="green iguana"
      />
      <CardContent sx={{backgroundColor:'lightgray', marginTop:2}}>
        <Typography gutterBottom sx={{textAlign:"center"}} variant="h5" component="div">
          {product.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{backgroundColor:'lightgray'}} >
      <Link to={`/Item/${product.id}`}>
      <Button sx={{backgroundColor:'blue', color:'white'}} size="medium" color="primary">
        Share
      </Button>
      </Link>
    </CardActions>
  </Card>
  );
};

export default Item;
