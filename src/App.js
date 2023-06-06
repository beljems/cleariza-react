import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='app__inner'>
        <Header/>
        <Menu/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        {/* <Experience/>
        <Contact/> */}
      </div>
    </div>
  );
}

export default App;
