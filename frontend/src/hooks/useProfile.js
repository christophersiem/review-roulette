import githubAPI from '../service/githubAPI'
import { useEffect, useRef, useState } from 'react'

export default function useProfile(username) {
  const [profile, setProfile] = useState({})
  const timerId = useRef(0)

  useEffect(() => {
    timerId.current && clearTimeout(timerId.current)
    timerId.current = window.setTimeout(
      () =>
        githubAPI
          .get('https://api.github.com/users/' + username)
          .then(response => response.data)
          .then(setProfile)
          .catch(error => console.error(error.message)),
      600
    )
  }, [username])

  return { profile }
}
