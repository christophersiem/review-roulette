import { useEffect, useState } from 'react'
import githubAPI from '../service/githubAPI'

export default function useRepo(user) {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    githubAPI
      .get(`https://api.github.com/users/${user}/repos`)
      .then(response => response.data)
      .then(setRepos)
      .catch(error => console.error(error.message))
  }, [user])

  return repos
}
