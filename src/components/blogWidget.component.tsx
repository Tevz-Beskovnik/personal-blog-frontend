import React, { FC } from "react";
import "./blogWidget.css"
import { Post } from "../types/post.interface"

const BlogWidget: FC<Post> = ({ id, title, date, views, childComp }) => {
    return (
        <div className="glass-card">
            
        </div>
    );
};