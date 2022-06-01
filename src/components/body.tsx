import React, { FC } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import './body.css';
import Landing from '../pages/landing';
import Blog from '../pages/blog';
import Top from '../pages/top';
import Home from '../pages/home';

const Body: FC = () => {
    return (
        <Switch>
            <Route path="/" element={ <Home/> }/>
            {/*<Route path="/landing" element={ <Landing/> }/>
            <Route path="/blog/:id" element={ <Blog/> }/>
            <Route path="/blog/top" element= { <Top/> }/>*/}
        </Switch>
    );
};

export default Body;