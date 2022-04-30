
import './App.css';
import Contact from './components/Contact';
import Navbars from './components/Navbars';
import LearnMore from './components/LearnMore';
import Services from './Services';
import Footer from './components/Footer';
import Why from './components/Why';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbars />
      <LearnMore />
      <Services />
      <Why />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
