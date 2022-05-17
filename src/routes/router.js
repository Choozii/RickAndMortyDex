import { Switch, Route, Router, Redirect } from 'react-router-dom';
import * as page from '@pages/index';
export default function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={page.CharacterList}></Route>
      <Route path="/character/:name" exact component={page.CharacterDetail}></Route>
      <Route path="/searching/:name" component={page.SearchResult}></Route>
      <Redirect to="/" />
    </Switch>
  );
}
