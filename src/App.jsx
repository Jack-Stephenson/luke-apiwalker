import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Luke APIwalker</h1>
      <SearchForm></SearchForm>
      <Switch>
        <Route exact path="/:category/:id">
          <Results></Results>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
