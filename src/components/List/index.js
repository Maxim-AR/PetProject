import React, {useContext} from 'react';
import { Post } from '../Post';
import backImg from '../../../public/assets/svg/fone.jpg'
import postContext from '../contexts/postContext';
import './index.css'

export const List = ({  favorites, setFavorites, data }) => {
    const {postList, setPostList} = useContext(postContext)
    return (
        <div className='list' style={{
            backgroundImage: `url(${backImg})`
        }} sx={{ minWidth: 275 }} >
            {data?.map((item, i) => (
                <Post key={i} itemPost={item} isInFavorites={favorites?.includes(item._id)} setFavorites={setFavorites}  />
            ))}
        </div>
    );
};
