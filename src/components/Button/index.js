import React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export const ButtonNewPost = () => {
    const navigate = useNavigate()
    const onButtonClick = () => {
      navigate('post/create')
    }
    return (
        <div>
            <CardActions>
                <Button onClick={onButtonClick} size="small">Create post!!!</Button>
            </CardActions>
        </div>
    )
}
