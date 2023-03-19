import './normalize.css'
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Knowledge from './components/Knowledge';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experiencie from './components/Experiencie';

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <main>
        <Header/>
        <Experiencie/>
        <Knowledge/>
        <Projects/>
        <About/>
        {/* <Contact/> */}
      </main>
      <Footer/>
    </div>
  )
}

export default App
