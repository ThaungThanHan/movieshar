import './App.scss';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Main from './components/Main';
import Button from './components/button/Button';
function App() {
  return (
    <div className="App">
      <Main/>
      {/* <Button /> */}
    </div>
  );
}

export default App;
