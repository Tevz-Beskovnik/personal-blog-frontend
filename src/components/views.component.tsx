import React, { FC } from "react";
import { Eye } from "../resources/icons";
import { ViewsProps } from "../types/views.interface";
import "./views.css"

const Views: FC<ViewsProps> = ({ views }) => {
    return(
        <div className="views-container">
            <p className="views-count">{views}</p>
            <Eye color="var(--font-color)"/>
        </div>
    );
}

export default Views;