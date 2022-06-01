import React, { FC } from "react";
import "./repo.css";
import { RepoProps } from "../types/repoProps.interface";
import { GoRepo } from "react-icons/go";

const Repo: FC<RepoProps> = ({ html_url, name, description }) => {
    return (
        <div className="about-card about-grid-right">
            <div className="about-repo">
                <div className="about-repo-header">
                    <GoRepo className="about-repo-icon"/>
                    <a href={html_url} className="about-repo-link">{ name }</a>
                </div>
                <div className="about-line"></div>
                <p className="about-repo-description">
                    { description }
                </p>
            </div>
        </div>
    );
}

export default Repo;