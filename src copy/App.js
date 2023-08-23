import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import { useContext } from 'react';
import { ProductContext } from './context/ProductContext';

function App() {
  const { producttDate } = useContext(ProductContext)
  console.log(producttDate);

  return (
    <div className="App">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
