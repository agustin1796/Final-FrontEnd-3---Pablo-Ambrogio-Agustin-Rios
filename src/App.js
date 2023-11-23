import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/common/navbar/NavBar';
import Footer from './components/common/footer/Footer';
import DentistContextProvider from './context/DentistContext';

function App() {
  return (
    <>
      <DentistContextProvider>
        <div className="App flex flex-col min-h-screen">
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </DentistContextProvider>
    </>
  );
}

export default App;
