import { getRequest } from "../requestHandlers/get.request";
import { Repo } from "../types/repo.interface";

const initState: Repo[] = [];
const repoReducer = (state: any = initState, action: any) => {
    switch (action.type){
        case "repos": {
            let currentRepo: Repo = action.payload[0];
            let currentSmallest: Date = new Date();
            const currentDate: Date = new Date();
            action.payload.forEach((element: Repo) => {
                const elementDate: Date = new Date(element.updated_at);
                if(currentDate.getTime() - elementDate.getTime() < currentSmallest.getTime())
                {
                    currentSmallest = new Date(currentDate.getTime() - elementDate.getTime());
                    currentRepo = element;
                }
            });
            return currentRepo;
        }
        default:
            return state;
    }
}

export default repoReducer;

export const reposGet = () => {
    return async (dispatch: any, getState: any) => {
        const response: Repo[] = await getRequest("https://api.github.com/users/tevzi2/repos");
        dispatch({
            type: "repos",
            payload: response
        });
    }
};