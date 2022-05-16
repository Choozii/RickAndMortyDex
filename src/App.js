import CharacterList from './pages/CharacterListPage/CharacterList';
import Character from './pages/CharacterPage/Character';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Searching from './pages/SearchingPage/Searching';
import styled from '@emotion/styled';

function App() {
  return (
    <div className="App">
      {/* ===== routing ===== */}
      <Container>
        <Switch>
          <Route path="/" component={CharacterList}></Route>
          <Route path="/character/:name" component={Character}></Route>
          <Route path="/searching/:name" component={Searching}></Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  max-width: 1024px;
`;
