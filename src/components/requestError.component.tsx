import React, { FC } from "react";
import "./requestError.css";
import { RequestErrorProps } from "../types/requestErrorProps.interface";

const RequestError: FC<RequestErrorProps> = ({ errorCode, errorMessage }) => {
    return(
        <div className="error-container">
            <h1 className="error-code">{errorCode}</h1>
            <p className="error-message">{errorMessage}</p>
        </div>
    );
}

export default RequestError;