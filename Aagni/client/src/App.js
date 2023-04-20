import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { View } from './component/View';
import { EditDetails } from './component/EditDetails';

function App() {
  return (
    <BrowserRouter>
              <Routes>

               <Route path='./' element={<View/>}></Route>
               <Route path='./EditDetails' element={<EditDetails/>}/>
               </Routes>
              
          </BrowserRouter>
  );
}

export default App;
