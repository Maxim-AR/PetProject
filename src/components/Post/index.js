import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import api from '../../utils/api';


export const Post = ({ itemPost, isInFavorites, setFavorites }) => {

  const [liked, setLiked] = useState(itemPost.likes.length);

  const writeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key)) || [];
    storage.push(value);
    localStorage.setItem(key, JSON.stringify(storage));
  };

  const removeLS = (key, value) => {
    const storage = JSON.parse(localStorage.getItem(key));
    const filteredStorage = storage.filter((itemID) => value !== itemID);
    localStorage.setItem(key, JSON.stringify(filteredStorage));
  };

  const addFavorite = () => {
    writeLS('favorites', itemPost._id);
    setFavorites((prevState) => [...prevState, itemPost._id]);
    api.addLike(itemPost._id)
    .then((addedItem) => {
      setLiked(addedItem.likes.length)
    })
      .catch((err) => alert(`${err.message}`));
  };

  const removeFavorite = () => {
    removeLS('favorites', itemPost._id);
    setFavorites((prevState) => prevState.filter((itemID) => itemPost._id !== itemID));
    api.deleteLike(itemPost._id)
    .then((removedItem) => {
      setLiked(removedItem.likes.length)
    })
      .catch((err) => alert(`${err.message}`));   
  };

  const deletePost = () => {
    api
      .deletePosts(itemPost._id)
      .then((res) => {
        document.location.reload();
      })
      .catch((err) => alert(err));
  };


  return (
    <div >
    <Card style={{ margin: '20px', width: '50px' }} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Link to={`post/${itemPost._id}`}> <CardMedia component='img' image ={itemPost?.author.avatar} alt={itemPost.name} /> </Link>
        </Typography>
        <Typography variant="h5" component="div">
          {itemPost.author.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {itemPost?.author.email}
        </Typography>
        <Typography variant="h8" color="text.secondary">
          {itemPost.title}
        </Typography>
        <Typography variant="body2">
          {itemPost.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deletePost}>Delete</Button>
        {isInFavorites ? (
          <IconButton aria-label='add to favorites' onClick={removeFavorite}>
            <FavoriteIcon  />{liked}
          </IconButton>
        ) : (
          <IconButton aria-label='add to favorites' onClick={addFavorite}>
            <FavoriteBorderOutlinedIcon />{liked}
          </IconButton>
        )}
      </CardActions>
    </Card>
    </div>
  );
};
