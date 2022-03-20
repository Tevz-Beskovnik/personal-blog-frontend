import React, { FC } from "react";
import "./blogWidget.css"
import { Post, PostPreview } from "../types/post.interface"
import Views from "./views.component";

const BlogWidget: FC<PostPreview> = ({ id, title, description, date, views }) => {
    return (
        <div className="card-glass">
            <div className="card-main-wrapper">
                <div className="card-main-title">
                    <a className="card-title-text" href={process.env.REACT_APP_FRONTEND_ADDRESS + "blog/" + id}>{title}</a>
                </div>
                <div className="card-description">
                    <p className="card-description-text">{description}</p>
                </div>
            </div>
            <div className="card-info-wrapper">
                <Views views={views}/>
            </div>
        </div>
    );
};

export default BlogWidget;