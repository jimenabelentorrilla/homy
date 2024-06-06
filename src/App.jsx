import './App.css';
import { Como } from './componentes/Como/Como';
import { Contact } from './componentes/Contact/Contact';
import { Faqs } from './componentes/Faqs/Faqs';
import { Header } from './componentes/Header/Header';
import { Nav } from "./componentes/Nav/Nav";
import { Our } from './componentes/Our/Our';
import { Footer } from "./componentes/Footer/Footer";

function App() {

  return (
    <>
      <div className="contenedor">
        <Nav />
        <Header />
        <Our />
        <Como />
        <Faqs />
        <Contact />
        <Footer />  
      </div>
    </>
  )
}

export default App
