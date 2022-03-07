import { ReqError } from "../types/requestError.interface";

export async function deleteRequest(url: string, header: HeadersInit | undefined): Promise<undefined | ReqError>
{
    const requestOptions: RequestInit = {
        method: "DELETE",
        headers: { ...header }
    };

    const response = await fetch(url, requestOptions);

    try
    {   
        const data = await response.json();
        return data;
    }catch(err)
    {
        return undefined;
    }
}