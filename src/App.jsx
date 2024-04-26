import './App.css';
import { Como } from './componentes/Como/Como';
import { Contact } from './componentes/Contact/Contact';
import { Faqs } from './componentes/Faqs/Faqs';
import { Header } from './componentes/Header/Header';
import { Nav } from "./componentes/Nav/Nav";
import { Our } from './componentes/Our/Our';
import { Footer } from "./componentes/Footer/Footer";
import { Navigate, Route, Routes } from 'react-router-dom';
import { ModalSignIn } from './componentes/Nav/ModalSignIn';
import { ModalSignUp } from './componentes/Nav/ModalSignUp';


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

      <Routes>
        <Route path="/signIn" element={<ModalSignIn />}> </Route>
        <Route path="/signUp" element={<ModalSignUp />}> </Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>

    </>
  )
}

export default App
