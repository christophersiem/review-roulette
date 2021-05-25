import { Link, useHistory, useParams } from 'react-router-dom'
import Avatar from './Avatar'
import useRepo from '../hooks/useRepo'

export default function RepoPage() {
  const { user } = useParams()
  const history = useHistory()
  const repos = useRepo(user)

  return (
    <>
      <Avatar src={`https://github.com/${user}.png`} />
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            {' '}
            <Link to={`/${user}/${repo.name}/pulls`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => history.goBack()}>Go back</button>
    </>
  )
}
