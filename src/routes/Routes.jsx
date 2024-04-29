import { Navigate, Route, Routes } from 'react-router-dom';
import { ModalSignIn } from './componentes/Nav/ModalSignIn';
import { ModalSignUp } from './componentes/Nav/ModalSignUp';

const Routes = () => {
  return (
    <>
        <Routes>
            <Route path="/signIn" element={<ModalSignIn />}> </Route>
            <Route path="/signUp" element={<ModalSignUp />}> </Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
    </>
  )
}

export default Routes;