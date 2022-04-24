import React, { useEffect, useState } from 'react';

import mockedData from '../data.json';
import api from './utils/api';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import Logo from './components/Logo';

import './index.css';
import { Info } from './components/Info';

export const App = () => {
    const [postList, setFoodList] = useState(null);
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    

    useEffect(()=> {
        api.getPosts().then((list) => setFoodList(list))
    },[])

    useEffect(() => {
        api.getCurentUser().then((user) => setUser(user));
    },[])
    
    return (
        <div className='appContainer'>
            <Header>
                <Logo />
                <Info  name={user?.name}  />
            </Header>
            <List list={postList} favorites={favorites} setFavorites={setFavorites} />
            <Footer />
        </div>
    );
};
