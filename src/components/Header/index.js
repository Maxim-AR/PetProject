import React from 'react';
import Logo from '../Logo';
import style from './style.module.css';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export const Header = ({children}) => {
    const onButtonClick = () => {
        console.log('Есть контакт')
    }
  
    return (
        <div className={style.mainContainer}>
            <div className={style.child}>
                {children}
            </div>
            <CardActions>
          <Button onClick={onButtonClick} size="small">Create post!!!</Button>
        </CardActions>
        </div>
    );
};
