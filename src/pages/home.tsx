import React, { FC } from "react";
import { SiC, SiCplusplus, SiCss3, SiEspressif, SiGithub, SiGnu, SiHtml5, SiJavascript, SiJsonwebtokens, SiNestjs, SiNodedotjs, SiReact } from "react-icons/si"
import "./home.css";

const Home: FC = () => {
    return (
        <div className="home-main">
            <div className="home-content">
                <h1 className="home-main-title">Tevž Beškovnik</h1>
                <div className="home-icons">
                    <div className="home-icon">
                        <SiCplusplus className="home-icon-size-si" color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiC className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiGnu className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiEspressif className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiGithub className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiNodedotjs className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiReact className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiNestjs className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiJsonwebtokens className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiHtml5 className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiCss3 className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                    <div className="home-icon">
                        <SiJavascript className="home-icon-size-si"  color="var(--font-color)"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;