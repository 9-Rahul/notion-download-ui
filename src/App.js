import logo from './logo.svg';
import './App.css';
import Header from './My_Components/Pages/Header';
import Banner from './My_Components/Pages/Banner';
import Download from './My_Components/Pages/Download';

function App() {
  return (
    <>

      <Header />

      <div className='App'>
        <Banner />
        <Download />
      </div>
    </>
  );
}

export default App;
