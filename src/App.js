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
import ScrollButton from './components/Scroll/ScrollButton';
import { Search } from './components/Search';
import { Pagination } from '@mui/material';

export const App = () => {
    const [postList, setPostList] = useState([]);
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const [searchQuery, setSearchQuery] = useState('')
    const [buttonClick, setButtonClick] = useState(1);
    const [pageItems, setPageItems] = useState(15);



    const handleChangeSearchInput = (value) => {
        setSearchQuery(value)
    }


    useEffect(() => {
        api.getPosts().then((list) => {
            setPostList(list.reverse())
        })
    }, [])


    useEffect(() => {
        api.getCurentUser().then((user) => setUser(user));
    }, [])


    useEffect(() => {
        api.getSearch(searchQuery).then((list) => setPostList(list.reverse()))
    }, [searchQuery])



    const pageQty = Math.ceil(postList.length / pageItems);
    const pageLimit = buttonClick * pageItems;
    let data = null;
    buttonClick == 1
        ? (data = postList.slice(0, pageLimit))
        : (data = postList.slice(pageLimit - pageItems, pageLimit));

    return (
        <div >
            <userContext.Provider value={{ user, setUser }} >
                <postContext.Provider value={{ postList, setPostList }}>
                    <Header>
                        <Logo />
                        <Search setQuery={handleChangeSearchInput} />
                        <Info />
                        <ButtonNewPost />
                    </Header>
                    <div className='appContainer'>
                        <div >
                            <Routes>
                                <Route path="/" element={<List list={postList} favorites={favorites} setFavorites={setFavorites} data={data} />} />
                                <Route path="post/:itemID" element={<OnePost />} />
                                <Route path="post/create" element={<CreatePost />} />
                            </Routes>
                            <ScrollButton />
                        </div>
                        {
                            pageQty > 1 && (
                                <Pagination
                                    style={{ marginBottom: '30px' }}
                                    count={pageQty}
                                    onChange={(_, num) => {
                                        setButtonClick(num)
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        })
                                    }
                                    }


                                />
                            )
                        }
                        <Footer />
                    </div>
                </postContext.Provider>
            </userContext.Provider>
        </div>
    );
};
