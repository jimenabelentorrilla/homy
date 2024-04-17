import './App.css'
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
        
      </div>
    </>
  )
}

export default App
