import styled from "styled-components";
import { DotProps } from "../types/dot.interface";

export const Dot = styled.div<DotProps>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${ props => props.color ? props.color : "white" };  
`;