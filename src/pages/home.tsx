import React, { FC, useEffect } from "react";
import { SiC, SiCplusplus, SiCss3, SiEspressif, SiGithub, SiGnu, SiHtml5, SiJavascript, SiJsonwebtokens, SiNestjs, SiNodedotjs, SiReact, SiDiscord, SiGmail } from "react-icons/si"
import { useDispatch, useSelector } from "react-redux";
import { reposGet } from "../reducers/repos";
import Repo from "../components/repo.component";
import "./home.css";

const Home: FC = () => {
    const dispatch = useDispatch();
    let repo: any = useSelector((state) => state);
    /*let i: number = 1;
    var interval: NodeJS.Timeout = setInterval(() => {
        if(i > 4)
            i = 1;
        document.getElementById(`section${i}`)?.click();
        i++;
    }, 9000);*/

    useEffect(() => {
        document.getElementById("section1")?.click();
        dispatch(reposGet())

        document.getElementById("section1")?.addEventListener("click", () => {
            document.querySelector("body")?.style.setProperty("--bg", `linear-gradient(cyan, transparent ), linear-gradient(-45deg, magenta, transparent), linear-gradient(45deg, yellow, transparent)`)
            document.querySelector("body")?.style.setProperty("--blend", `multiply`)
        })

        document.getElementById("section2")?.addEventListener("click", () => {
            document.querySelector("body")?.style.setProperty("--bg", `linear-gradient(yellow, transparent ), linear-gradient(-45deg, cyan, transparent), linear-gradient(45deg, magenta, transparent)`)
            document.querySelector("body")?.style.setProperty("--blend", `multiply`)
        })

        document.getElementById("section3")?.addEventListener("click", () => {
            document.querySelector("body")?.style.setProperty("--bg", `linear-gradient(limegreen,transparent),linear-gradient(90deg,skyblue,transparent),linear-gradient(-90deg,coral,transparent)`)
            document.querySelector("body")?.style.setProperty("--blend", `screen`)
        })

        document.getElementById("section4")?.addEventListener("click", () => {
            document.querySelector("body")?.style.setProperty("--bg", `radial-gradient(circle at center bottom,coral, darkslateblue)`)
            document.querySelector("body")?.style.setProperty("--blend", `multiply`)
        });
    }, []);

    const diff = new Date().getTime() -  new Date("07/02/2003").getTime();
    const end = Math.floor(diff / 1000 / 3600 / 24 / 365);

    return (
        <div className="home-main">
            <div className="home-content">
                <input type="radio" name="item" id="section1"/>
                <input type="radio" name="item" id="section2"/>
                <input type="radio" name="item" id="section3"/>
                <input type="radio" name="item" id="section4"/>
                <section id="home">
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
                </section>
                <section id="about">
                    <h1 className="about-main-title">A little about me:</h1>
                    <p className="about-main-info">I'm a { end } year old amateur developer based in Slovenia, that likes to play around with web development, computer graphics and the espressif platform.</p>
                    <p className="about-main-info">I currently study at <a className="about-link" href="https://sers.si/">SERŠ</a>, the middle school for electronics and computer science in Maribor. I am currently attending the 4th year of education.</p>
                    <p className="about-main-info">I'm experienced with Vue.js, React.js, Nest.js and GO backend development.</p>
                    <p className="about-main-info">I have experience with programing microcontrollers: ESP32, Arduino and Pi Pico. I have also spent some time on OS development.</p>
                    <p className="about-main-info">I've studied computer graphics, rendering and made a very simple game engine / rendering <a className="about-link" href="https://github.com/Tevzi2/Zwet-engine">tool</a></p>
                </section>
                <section id="recent">
                    <h1 className="about-main-title">Recent Projects:</h1>
                    <div className="recent-repo-wrapper">
                    {  repo[0] !== undefined && (
                        <>
                            <Repo html_url={repo[0].html_url} name={ repo[0].name } description={repo[0].description}/>
                            <Repo html_url={repo[1].html_url} name={ repo[1].name } description={repo[1].description}/>
                            <Repo html_url={repo[2].html_url} name={ repo[2].name } description={repo[2].description}/>
                        </>
                        )
                    }
                    </div>
                </section>
                <section id="contact">
                    <h1 className="about-main-title">Want to get in touch?</h1>
                    <p className="about-main-info">&nbsp;&nbsp;&nbsp;&nbsp;<SiGmail   className="contact-icon" color="var(--font-color)"/> tevz.beskovnik@gmail.com</p>
                    <p className="about-main-info">&nbsp;&nbsp;&nbsp;&nbsp;<SiDiscord className="contact-icon" color="var(--font-color)"/> ZVET#0952</p>
                </section>
                <div className="selectors">
                    <label htmlFor="section1" className="radio-button"></label>
                    <label htmlFor="section2" className="radio-button"></label>
                    <label htmlFor="section3" className="radio-button"></label>
                    <label htmlFor="section4" className="radio-button"></label>
                </div>
            </div>
        </div>
    );
};

export default Home;