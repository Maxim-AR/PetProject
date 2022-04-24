import React from 'react';
import { Post } from '../Post';
import backImg from '../../../public/assets/svg/blue.jpg'

export const List = ({ list, favorites, setFavorites }) => {
    return (
        <div style={{
            backgroundImage: `url(${backImg})` ,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: "flex", 
            flexWrap:'wrap', 
            justifyContent:"space-between",
            width: '100%',
        }} sx={{ minWidth: 275 }} >
            {list?.map((item, i) => (
                <Post key={i} itemPost={item} isInFavorites={favorites?.includes(item._id)} setFavorites={setFavorites} />
            ))}
        </div>
    );
};
