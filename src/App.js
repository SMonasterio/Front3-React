import './styles/App.css';
import Contador from './components/Contador';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/gatitos" element={<Contador />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
