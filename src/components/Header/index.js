import React from 'react';
import Logo from '../Logo';
import style from './style.module.css';


export const Header = ({children}) => {
  
  
    return (
        <div>
            <div className={style.child}>
                {children}
            </div>
       </div>
    );
};
