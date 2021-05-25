import githubAPI from "../service/githubAPI";
import {useEffect, useState} from "react";

export default function usePullRequest(user, repo){
    const [pullRequests, setPullRequests] = useState([])

    useEffect(() => {
        githubAPI.get(`https://api.github.com/repos/${user}/${repo}/pulls?state=all`)
            .then(response => response.data)
            .then(setPullRequests)
            .catch(error => console.error(error.message))
    }, [user, repo])

    return pullRequests
}