import { BlogInterface, Post } from "../types/post.interface";
import { SignIn, AccessToken } from "../types/signin.interface";
import { ReqError } from "../types/requestError.interface";

export async function putRequest(url: string, body: JSON, header?: HeadersInit | undefined): Promise<BlogInterface | Post | SignIn | AccessToken | ReqError | any>
{
    const requestOptions: RequestInit = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json', ...header },
        body: JSON.stringify(body)
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
}