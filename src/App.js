import './styles/App.css';
import Contador from './components/Contador';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './components/Menu';
import Facturas from './components/Facturas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/gatitos" element={<Contador />} />
        <Route path="facturas/*" element={<Facturas />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
