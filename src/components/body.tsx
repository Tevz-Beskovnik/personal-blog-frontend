import React, { FC } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import './body.css';
import Landing from '../pages/landing';
import BlogPost from '../pages/blogPost';
import Top from '../pages/top';

const Body: FC = () => {
    return (
        <div>
            <Switch>
                <Route path="/" element={ <Landing/> }/>
                <Route path="/blog/:id" element={ <BlogPost/> }/>
                <Route path="/blog/top" element= { <Top/> }/>
            </Switch>
        </div>
    );
};

export default Body;