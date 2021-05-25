import { useHistory, useParams } from 'react-router-dom'
import Avatar from './Avatar'
import usePullRequest from '../hooks/usePullRequest'

export default function PullRequestPage() {
  const { user, repo } = useParams()
  const pullRequests = usePullRequest(user, repo)
  const history = useHistory()

  return (
    <>
      <Avatar src={`https://github.com/${user}.png`} />
      <ul>
        {pullRequests.map(pullRequest => (
          <li>
            <a href={pullRequest.html_url} target={'_blank'}>
              {pullRequest.title}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={() => history.goBack()}>Go back</button>
    </>
  )
}
