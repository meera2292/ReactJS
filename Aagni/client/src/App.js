import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { View } from './component/View';
import { EditDetails } from './component/EditDetails';
import { Insertcustomer } from './component/Insertcustomer';

function App() {
  return (
    <BrowserRouter>
              <Routes>

               <Route path='/' element={<View/>}></Route>
               <Route path='/EditDetails/:sno' element={<EditDetails/>}/>
               <Route path='/Insertcustomer' element={<Insertcustomer/>}></Route>
               </Routes>
             
          </BrowserRouter>
  );
}

export default App;
