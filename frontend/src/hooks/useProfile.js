import githubAPI from "../service/githubAPI";
import {useState} from "react";

export default function useProfile(username){
    const [profile, setProfile] = useState({})
    const [isError, setIsError] = useState(false)
    const findUser = () => {
        githubAPI
            .get('https://api.github.com/users/' + username)
            .then(response => response.data)
            .then(setProfile)
            .catch(() => setIsError(true))
    }
    const handleClick = () => {
        setIsError(false)
        findUser()
    }

    return {profile, isError, handleClick}
}