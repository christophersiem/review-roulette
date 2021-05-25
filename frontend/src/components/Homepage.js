import {useState} from "react";
import githubAPI from "../service/githubAPI";
import {useHistory} from 'react-router-dom'
import Avatar from "./Avatar";

export default function Homepage() {

    const [username, setUsername] = useState('')
    const [profile, setProfile] = useState({})
    const history = useHistory()

    const findUser = () => {
        githubAPI.get('https://api.github.com/users/' + username)
            .then(response => response.data)
            .then(setProfile)
            .catch(error => console.error(error))
    }

    return (
        <>
            <Avatar src={profile.avatar_url || 'https://images.placepaca.com/Alpaka_10.jpg'}/>
            <input type="text" placeholder="Enter GitHub user" value={username}
                   onChange={event => setUsername(event.target.value)}/>
            <button onClick={findUser}>Find User</button>
            {profile.id && <button onClick={()=> history.push(`${username}/repos`)}>Show Repos</button>}
        </>
    )
}
