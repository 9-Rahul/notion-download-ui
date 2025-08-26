import './App.css';
import Header from './My_Components/Pages/Header';
import Banner from './My_Components/Pages/Banner';
import Download from './My_Components/Pages/Download';
import Footer from './My_Components/Pages/Footer';

function App() {
  return (
    <>

      <Header />

      <div className='App'>
        <Banner />
        <Download />
        <Footer />
      </div>
    </>
  );
}

export default App;
