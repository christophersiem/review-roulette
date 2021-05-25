import styled from 'styled-components/macro'
import {Switch, Route} from 'react-router-dom'
import Homepage from "./components/Homepage";
import RepoPage from "./components/RepoPage";
import PullRequestPage from "./components/PullRequestPage";

function App() {

    return (
        <Page>
            <Switch>
                <Route path={"/"} exact>
                    <Homepage/>
                </Route>
                <Route path={"/:user/repos"}>
                    <RepoPage/>
                </Route>
                <Route path={"/:user/:repo/pulls"}>
                    <PullRequestPage/>
                </Route>
            </Switch>
        </Page>
    )
}

export default App

const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`


