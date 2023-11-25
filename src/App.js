import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/common/navbar/NavBar';
import Footer from './components/common/footer/Footer';
import DentistContextProvider from './context/DentistContext';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <DentistContextProvider>
        <ThemeContextProvider>
          <div className="App flex flex-col min-h-screen">
            <NavBar />
            <Outlet />
            <Footer />
          </div>
        </ThemeContextProvider>
      </DentistContextProvider>
    </>
  );
}

export default App;
