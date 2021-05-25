import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Avatar from './Avatar'
import useProfile from "../hooks/useProfile";

export default function Homepage() {
    const [username, setUsername] = useState('')
    const history = useHistory()
    const {profile, isError, handleClick} = useProfile(username)

    return (
        <>
            <Avatar
                src={profile.avatar_url || 'https://images.placepaca.com/Alpaka_10.jpg'}
            />
            <input
                type="text"
                placeholder="Enter GitHub user"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <button onClick={handleClick}>Find User</button>
            {isError && <p>Something went wrong. Please try again</p>}
            {profile.id && (
                <button onClick={() => history.push(`${username}/repos`)}>
                    Show Repos
                </button>
            )}
        </>
    )
}
