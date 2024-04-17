import './App.css'
import { Header } from './componentes/Header';
import { Nav } from "./componentes/Nav";
import { Our } from './componentes/Our';

function App() {

  return (
    <>
      <div className="contenedor">
        <Nav />
        <Header />
        <Our />     
        
      </div>
      
    </>
  )
}

export default App
