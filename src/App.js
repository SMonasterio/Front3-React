import './App.css';
import Contador from './components/Contador';
import {browserHistory, Router, Route} from "react-router-3";
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}> 
        <Route path="/" component={Menu} />
{/*         <Route path="/" component={Contador} /> */}
        <Route path="/gatitos" component={Contador} />
      </Router>
    </div>
  );
}

export default App;
