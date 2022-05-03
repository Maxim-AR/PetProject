import React, {useContext} from 'react';
import userContext from '../contexts/userContext';


export const Info = () => {
    const {user, setUser} = useContext(userContext)
   
    return (
        <div>
            
            <div> Приветствую тебя {user?.name} ! </div>
        </div>
    );
};