import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CategoryCard(props) {
  return (
    <Card sx={{ maxWidth: 345,
        bgcolor: 'secondary.main'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src\components\Category\avatar_cv.jpg"
          alt="Image Category"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.category.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.category.mota}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
