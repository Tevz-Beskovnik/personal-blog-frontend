import React, { FC } from "react"
import { Eye } from "../resources/icons";
import { Post } from "../types/post.interface";
import "./blogContainer.css"
import { DateContainer } from "./date.component";

const BlogContainer: FC<Post> = ({ id, title, date, views, childComp }) => {
    return(
        <div className="blog-container">
            <div className="content-container">
                <div className="header-container">
                    <h1 className="post-title">
                        {title}
                    </h1>
                    <div className="post-views-container">
                        <p className="views">{views}</p>
                        <Eye/>
                    </div>
                </div>
                <div className="markdown-container">
                    {childComp}
                </div>
                <DateContainer dateTime={date}>{date}</DateContainer>
            </div>
        </div>
    );
};

export default BlogContainer;