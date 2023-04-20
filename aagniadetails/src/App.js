
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { View } from './AagniComponents/View';
import { EditDetails } from './AagniComponents/EditDetails';

function App() {
  return (
          <BrowserRouter>
              <Routes>

                <Route path='/' element={<View/>}></Route>
                <Route path='/EditDetails' element={<EditDetails/>}></Route>

              </Routes>
              
          </BrowserRouter>
    
  );
}

export default App;
