import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';


export const Post = ({ itemPost }) => {
    return (
        <Card  style  ={{ margin : '20px', width: '50px'}} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <CardMedia component='img' image={itemPost.author.avatar} alt={itemPost.name} />
          </Typography>
          <Typography variant="h5" component="div">
            {itemPost.author.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {itemPost?.author.email}
          </Typography>
          <Typography variant="body2">
            {itemPost.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Click</Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> 
        </IconButton>{itemPost.likes.length}
        </CardActions>
      </Card>
    );
};
