import React, { FC } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import './body.css';
import Landing from '../pages/landing';
import BlogPost from '../pages/blogPost';

const Body: FC = () => {
    return (
        <div>
            <Switch>
                <Route path="/" element={ <Landing/> }/>
                <Route path="/blogpost/:id" element={ <BlogPost/> }/>
            </Switch>
        </div>
    );
};

export default Body;