import { BlogInterface, Post } from "../types/post.interface";
import { SignIn, AccessToken } from "../types/signin.interface";
import { ReqError } from "../types/requestError.interface";

export async function getRequest(url: string, headers?: HeadersInit | undefined): Promise<BlogInterface | BlogInterface[] | Post | SignIn | AccessToken | ReqError | any>
{
    const requestOptions: RequestInit = {
        method: "GET",
        headers: { ...headers }
    };
    
    try
    {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return data;  
    }
    catch(err){
        console.log(err);
    }
};