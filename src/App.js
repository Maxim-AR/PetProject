import React, { useEffect, useState } from 'react';


import api from './utils/api';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import Logo from './components/Logo';
import { Routes, Route, Link } from "react-router-dom";
import { OnePost } from './components/OnePost'
import './index.css';
import { Info } from './components/Info';
import { ButtonNewPost } from './components/Button';
import { CreatePost } from './components/CreatePost';
import userContext from './components/contexts/userContext';
import postContext from './components/contexts/postContext';
export const App = () => {
    const [postList, setPostList] = useState(null);
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);


    useEffect(() => {
        api.getPosts().then((list) => setPostList(list))
    }, [])

    useEffect(() => {
        api.getCurentUser().then((user) => setUser(user));
    }, [])

    return (
        <div >
            <userContext.Provider value={{user, setUser}} >
                <postContext.Provider value ={{postList, setPostList}}>
                <Header>
                    <Logo />
                    <Info  />
                    <ButtonNewPost />
                </Header>
                <div className='appContainer'>
                <div >
                    <Routes>
                        <Route path="/" element={<List list={postList} favorites={favorites} setFavorites={setFavorites} />} />
                        <Route path="post/:itemID" element={<OnePost  />} />
                        <Route path="post/create" element={<CreatePost />} />
                    </Routes>
                </div>
                <Footer />
                </div>
                </postContext.Provider>
            </userContext.Provider>
        </div>
    );
};
