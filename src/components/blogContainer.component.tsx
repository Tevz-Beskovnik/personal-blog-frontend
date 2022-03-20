import React, { FC } from "react"
import { Post } from "../types/post.interface";
import "./blogContainer.css"
import { DateContainer } from "./date.component";
import Views from "./views.component";

const BlogContainer: FC<Post> = ({ id, title, description, date, views, childComp }) => {
    return(
        <div className="blog-container">
            <div className="content-container">
                <div className="header-container">
                    <h1 className="post-title">
                        {title}
                    </h1>
                    <div className="views-container">
                        <Views views={views}/>
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