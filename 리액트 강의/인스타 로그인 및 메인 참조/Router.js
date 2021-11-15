import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main, Login } from "./components/pages";
import { Layout } from "./components/atoms";
import Nav from "./components/organisms/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Layout>
            <Main />
          </Layout>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
