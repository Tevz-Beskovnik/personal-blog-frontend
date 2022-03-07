import React, { FC } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import './body.css';
import Landing from '../pages/landing';
import Blog from '../pages/blog';
import Top from '../pages/top';

const Body: FC = () => {
    return (
        <div>
            <Switch>
                <Route path="/" element={ <Landing/> }/>
                <Route path="/blog/:id" element={ <Blog/> }/>
                <Route path="/blog/top" element= { <Top/> }/>
            </Switch>
        </div>
    );
};

export default Body;