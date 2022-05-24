import './App.css';
import styled from '@emotion/styled';
import AppRouter from './routes/router';
import Header from './components/header';
import BottomSheet from './components/bottom_sheet';
import SearchBar from './components/search_bar';
function App() {
  return (
    <div className="App">
      <Header />
      <BottomSheet title="🔍">{<SearchBar placeholder="" onCallback={() => console.log('hi')} />}</BottomSheet>
      <AppRouter />
    </div>
  );
}

export default App;
