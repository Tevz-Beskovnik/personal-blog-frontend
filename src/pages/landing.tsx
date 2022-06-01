import React, { FC, useEffect, useState } from "react";
import BlogWidget from "../components/blogWidget.component";
import RequestError from "../components/requestError.component";
import { getRequest } from "../requestHandlers/get.request";
import { PostPreview } from "../types/post.interface";
import { ReqError } from "../types/requestError.interface";
import './landing.css';

const Landing: FC = () => {
    const [post, setPost] = useState<PostPreview[] | ReqError>();    

    async function getAllBlog() {
        setPost(await getRequest(process.env.REACT_APP_BACKEND_ADDRESS + "blog"));
    }

    useEffect(() => {
        getAllBlog();
    }, []);

    return (
        <div className="landing-main">
            <div className="landing-posts-container">
                { post && !('error' in post) && (
                    <div className="landing-post-components-container">
                        <div className="landing-posts">
                        { post.map(singlePost => 
                            (
                                <div className="landing-post-container">
                                    <div className="landing-date">
                                        <div className="landing-date-text">{singlePost.date}</div>
                                        <div className="landing-date-dot"></div>
                                    </div>
                                    <div className="landing-post-component">
                                        <BlogWidget id={singlePost.id} title={singlePost.title} description={singlePost.description} date={singlePost.date} views={singlePost.views} />
                                    </div>
                                </div>
                            )
                        )}
                        </div>
                        <div className="landing-date-line"></div>
                    </div>
                )}
                { post && ('error' in post) && (
                    <RequestError errorCode={post.statusCode} errorMessage={post.message}/>
                )}
            </div>
        </div>
    );
};

export default Landing;