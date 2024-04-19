import './App.css'
import { Como } from './componentes/Como/Como';
import { Contact } from './componentes/Contact/Contact';
import { Faqs } from './componentes/Faqs/Faqs';
import { Header } from './componentes/Header/Header';
import { Nav } from "./componentes/Nav/Nav";
import { Our } from './componentes/Our/Our';

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
      </div>
    </>
  )
}

export default App
