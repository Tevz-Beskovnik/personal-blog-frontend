import styled from "styled-components";
import { PropsNav } from "../types/props.interface";

export const NavBar = styled.div<PropsNav>`
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    height: 20vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor || "#ffffff"};
`;

export const NavElement = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;
    margin-left: ${ props => props.dir == "left" ? "auto" : "10px"};
    margin-right: ${ props => props.dir == "right" ? "auto" : "10px"};
    width: auto;
`;