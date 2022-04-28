import React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export const ButtonNewPost = () => {
    const onButtonClick = () => {
        console.log('Есть контакт')
    }
    return (
        <div>
            <CardActions>
                <Button onClick={onButtonClick} size="small">Create post!!!</Button>
            </CardActions>
        </div>
    )
}
