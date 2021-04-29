import CharacterList from "./pages/CharacterListPage/CharacterList";
import Character from "./pages/CharacterPage/Character";
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Searching from "./pages/SearchingPage/Searching";

function App() {
  return (
    <div className="App">
    {/* ===== routing ===== */}
    <Switch>
      <Route path="/" exact component={CharacterList}></Route>
      <Route path="/character/:name" exact component={Character}></Route>
      <Route path="/searching/:name" exact component={Searching}></Route>
      <Redirect to="/"/>
    </Switch>
    </div>
    );
}

export default App;
