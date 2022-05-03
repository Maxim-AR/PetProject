import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/api';



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Grid, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import dayjs from 'dayjs';


export const OnePost = () => {
  const [onePost, setOnePost] = useState(null)

  const params = useParams();

  useEffect(() => {
    api.getPosts(params.itemID)
      .then((data) => setOnePost(data))
      .catch((err) => alert(err))

  }, [])

  return (

    <div >
      <Card style={{ margin: '20px', width: '50px' }} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <CardMedia component='img' image={onePost?.image} alt={onePost?.name} />
          </Typography>
          <Typography variant="h5" component="div">
            {onePost?.author.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {onePost?.author.email}
          </Typography>
          <Typography variant="h8" color="text.secondary">
            {onePost?.title}
          </Typography>
          <Typography variant="body2">
            {onePost?.text}
          </Typography>

          <Grid container>

            {onePost?.comments.map((item, i) => (
              <Grid item key={i}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={item.author?.avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={<Typography variant='body1'>{item.author?.name}</Typography>} secondary={dayjs(item.created_at).format('DD.MM.YYYY')} />
                </ListItem>

                <Typography variant='body1'>{item.text}</Typography>
              </Grid>
            ))}
          </Grid>

        </CardContent>
        {/* <CardActions>
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
      </CardActions> */}
      </Card>
    </div>
  )
}
