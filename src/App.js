import './App.css';
import styled from '@emotion/styled';
import AppRouter from './routes/router';
function App() {
  return (
    <div className="App">
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  max-width: 1024px;
`;
