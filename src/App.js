import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <div className="App flex flex-col min-h-screen">
        <NavBar/>
        <Outlet/>
        <Card/>
      </div>

      <Footer/>
    </>
  );
}

export default App;
