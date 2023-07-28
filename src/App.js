import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Menu />

    </div>
  );
}

export default App;
