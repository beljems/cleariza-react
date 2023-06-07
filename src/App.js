import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='app__inner'>
        <Menu/>
        <Header/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Reviews/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
