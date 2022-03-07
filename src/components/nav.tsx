import React, { FC } from "react";
import { useLocation } from "react-router";
import { ActiveLink, NavBar, NavElement, Visibile } from "./nav.component"
import './nav.css';

const Nav: FC = () => {
    const { pathname } = useLocation();

    return (
        <nav>
            <NavBar>
                <NavElement width="100px" height="100%" right="" flex="2">
                    <div id="logo-container">
                        <div id="logo-text-container">
                            <ActiveLink active={ pathname === "/home" } activeColor="#ffffff" passiveColor="#dfdfdf" href="./home">ZVET</ActiveLink>
                            <ActiveLink active={ pathname === "/" } activeColor="#ffffff" passiveColor="#dfdfdf" href="./">BLOG</ActiveLink>
                        </div>
                        <div id="logo-underline"></div>
                    </div>
                </NavElement>
                <NavElement width="100px" height="100%" left="" flex="7">
                    <Visibile visible={ pathname === "/" }>
                        <div id="selection-container">
                            <div className="flex-selection">
                                <a href="./" className="feed-selector">All</a>
                                <p id="divider">/</p>
                                <a href="./" className="feed-selector">New</a>
                            </div>
                            <div id="selection-underline">
                            </div>
                        </div>
                    </Visibile>
                </NavElement>
            </NavBar>
        </nav>
    );
};

export default Nav;