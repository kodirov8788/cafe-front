import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
