import { createAsyncThunk } from "@reduxjs/toolkit";
import React, { FC, useEffect, useState } from "react";
import { GoRepo } from "react-icons/go";
import { SiDiscord, SiGithub, SiGmail } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { Dot } from "../components/dot.component";
import { reposGet } from "../reducers/repos";
import { getRequest } from "../requestHandlers/get.request";
import { Repo } from "../types/repo.interface";
import "./about.css";

const About: FC = () => {
    const dispatch = useDispatch();
    let repo: any = useSelector((state) => state);

    useEffect(() => {
        dispatch(reposGet());
    }, [])

    const diff = new Date().getTime() -  new Date("07/02/2003").getTime();
    const end = Math.floor(diff / 1000 / 3600 / 24 / 365);

    return (
        <div className="about-main">
            <div className="about-card about-grid-left">
                <h1 className="about-main-title">Tevž Beškovnik</h1>
                <p className="about-main-info">Welcome to my personal page, I'm a { end } year old amateur developer from Slovenske Konjice, that likes to play around with web development, 3D graphics and the espressif platform.</p>
                <p className="about-main-info">I currently study at <a className="about-link" href="https://sers.si/">SERŠ</a>, the middle school for electronics and computer science in Maribor. I am currently attending the 4th year of education.</p>
                <p className="about-main-info">I have also recently achieved 2nd place in the ACM web development competition (<a className="about-link" href="http://rtk.ijs.si/2021/rezultati.html#web">here</a>)</p>
                <p className="about-main-info">I've also recently; With the help of a teammate, got first place in the country wide RCJ rescue maze competition for the robot programing cospace simulator.</p>
                <h3 className="about-secondary-title">Contacts:</h3>
                <ul className="about-list">
                    <li>
                        <div className="about-list-entry">
                            <SiDiscord className="about-contacts"/>ZVET#0952
                        </div>
                    </li>
                    <li>
                        <div className="about-list-entry">
                            <SiGmail className="about-contacts"/>tevz.beskovnik@gmail.com
                        </div>
                    </li>
                    <li>
                        <div className="about-list-entry">
                            <SiGithub className="about-contacts"/><a href="https://github.com/Tevzi2" className="about-gh">Tevzi2</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="about-card about-grid-right">
                <h1 className="about-main-title">Recently updated:</h1>
                <div className="about-line"></div>
                <div className="about-repo">
                    <div className="about-repo-header">
                        <GoRepo className="about-repo-icon"/>
                        <a href={repo.html_url} className="about-repo-link">{ repo.name }</a>
                    </div>
                    <p className="about-repo-description">
                        { repo.description }
                    </p>
                    <div className="about-repo-footer">
                        <Dot color={ 
                            repo.language === "JavaScript" 
                                ? "var(--javascript)"
                                : repo.language === "Typescript"
                                    ? "var(--typescript)"
                                    : repo.language === "C" 
                                        ? "var(--c)"
                                        : "var(--cplusplus)"
                        }/>
                        <p className="about-repo-lang">{ repo.language }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;