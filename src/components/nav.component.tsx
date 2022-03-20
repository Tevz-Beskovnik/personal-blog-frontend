import styled from "styled-components";
import { PropsActiveLink, PropsNav, PropsNavElement, PropsVisibile } from "../types/navProps.interface";

export const NavBar = styled.div<PropsNav>`
    margin: ${props => props.margin || "0"};
    padding: 20px 0 20px 0;
    height: 7vh;
    display: flex;
    width: 100%;
    background-color: ${props => props.backgroundColor || "rgba(255, 255, 255, 0)"};
`;

export const NavElement = styled.div<PropsNavElement>`
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;
    flex: ${ props => props.flex ? props.flex : "auto"};
    margin-left: ${ props => props.left ? "auto" : "10px"};
    margin-right: ${ props => props.right ? "auto" : "10px"};
`;

export const ActiveLink = styled.a<PropsActiveLink>`
    font-size: xx-large;
    color: ${ props => props.active ? props.activeColor : props.passiveColor };
    font-family: 'Nunito-Bold';
    opacity: ${props => props.active ? "100%" : "70%"};
    margin: 0;
    text-decoration: none;
    transition: 0.5s;

    :hover{
        opacity: 100%;
        color: var(--font-color);
    }
`;

export const Visibile = styled.div<PropsVisibile>`
    position: ${ props => props.visible ? "relative" : "absolute" };
    opacity: ${ props => props.visible ? "100%" : "0%" };
`;