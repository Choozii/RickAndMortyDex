import CharacterList from "./pages/CharacterListPage/CharacterList";
import Character from "./pages/CharacterPage/Character";
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

    {/* ===== routing ===== */}
    <Switch>
      <Route path="/" exact component={CharacterList}></Route>
      <Route path="/character/:name" exact component={Character}></Route>
      <Redirect to="/"/>
    </Switch>
    </div>
    );
}

export default App;
