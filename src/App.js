import AppRouter from '@routes/router';
import Header from '@components/header';
import Search from '@pages/Search';
function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <AppRouter />
    </div>
  );
}

export default App;
