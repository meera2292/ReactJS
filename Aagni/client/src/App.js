import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { View } from './component/View';
import { EditDetails } from './component/EditDetails';
import { Insertcustomer } from './component/Insertcustomer';
import { Viewcustomeretails } from './component/Viewcustomeretails';
import { Login } from './component/Login';

function App() {
  return (
    <BrowserRouter>
              <Routes>

               <Route path='/' element={<Login/>}></Route>
               <Route path='/EditDetails/:sno' element={<EditDetails/>}/>
               <Route path='/Insertcustomer' element={<Insertcustomer/>}></Route>
               <Route path='/Viewcustomeretails/:sno' element={<Viewcustomeretails/>}></Route>
               </Routes>
             
          </BrowserRouter>
  );
}

export default App;
