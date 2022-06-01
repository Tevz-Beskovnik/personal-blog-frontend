import { getRequest } from "../requestHandlers/get.request";
import { Repo } from "../types/repo.interface";

const initState: Repo[] = [];
const repoReducer = (state: any = initState, action: any) => {
    switch (action.type){
        case "repos": {
            return action.payload.sort((o1: Repo, o2: Repo) => {
                return new Date(o1.updated_at).getTime() - new Date(o2.updated_at).getTime();
            }).reverse();
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