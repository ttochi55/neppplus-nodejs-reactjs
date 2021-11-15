import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main, Movie, Book, BookDetail } from "./components/pages";
import { PageHeader } from "./components/organisms";

const Router = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/book" exact>
          <Book />
        </Route>
        <Route path="/book/:isbn">
          <BookDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
