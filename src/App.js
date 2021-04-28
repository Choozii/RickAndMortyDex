import ItemList from "./pages/ItemListPage";
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Character from "./container/Character";

function App() {
  return (
    <div className="App">

    {/* ===== routing ===== */}
    <Switch>
      <Route path="/" exact component={ItemList}></Route>
      <Route path="/character/:name" exact component={Character}></Route>
      <Redirect to="/"/>
    </Switch>
    </div>
    );
}

export default App;
