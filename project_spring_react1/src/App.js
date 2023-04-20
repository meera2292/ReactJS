
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Menu } from './component/Menu/Menu';
import { Login } from './component/Login/Login';
import {SignIn} from './component/Register/SignIn'
import { UserDetails } from './component/ListDetails/UserDetails';
import { Nodeconnection } from './component/Nodeconnection';

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/Login' element={[<Menu/>,<Login/>]}></Route>
    <Route path='/SignIn' element={[<Menu/>,<SignIn/>]}></Route>
    <Route path='/UserDetails' element={[<Menu/>,<UserDetails/>]}></Route>
    <Route path='/details' element={<Nodeconnection/>}></Route>
   </Routes>
   
   
   </BrowserRouter>

    </>
  );
}

export default App;
