import React, {useContext} from 'react';
import { Post } from '../Post';
import backImg from '../../../public/assets/svg/fone.jpg'
import postContext from '../contexts/postContext';

export const List = ({  favorites, setFavorites }) => {
    const {postList, setPostList} = useContext(postContext)
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
            {postList?.map((item, i) => (
                <Post key={i} itemPost={item} isInFavorites={favorites?.includes(item._id)} setFavorites={setFavorites}  />
            ))}
        </div>
    );
};
