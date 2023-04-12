import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { MenuPortfolio } from './component/portfolio/MenuPortfolio/MenuPortfolio';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Home } from './component/portfolio/Home/Home';
import { Menu } from './component/Menu/Menu';
import { About } from './component/portfolio/About/About';
import { Hello} from './component/task1/Hello';
import { Congrats} from './component/task2/Congrats';
import { Social} from './component/task4/Social';
import { Notification} from './component/task5/Notification';
import { Login} from './component/task6/Login';
import { Technology} from './component/task7/Technology';
import { League} from './component/task3/League';
import { Hooks } from './component/Hooks/Hooks';
import { Fruits } from './component/task8/Fruits';
import { Feedback } from './component/task9/Feedback';
import { Feedback2 } from './component/task9/Feedback2';
import { DateFunction } from './component/task10/DateFunction';
import { Product } from './component/task11/Product';
import { Skills } from './component/portfolio/Skills/Skills';
import { Certification } from './component/portfolio/Certifications/Certification';
import {Education} from './component/portfolio/Education/Education';
import {Contact} from './component/portfolio/Contact/Contact';


function App() 
{ 
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={[<MenuPortfolio/>,<Home/>,<About/>,<Skills/>,<Certification/>,<Education/>,<Contact/>]}></Route>
    <Route path='/Home' element={[<MenuPortfolio/>,<Home/>]}></Route>
    <Route path='/About' element={[<MenuPortfolio/>,<About/>]}></Route>
    <Route path='/Skills' element={[<MenuPortfolio/>,<Skills/>]}></Route>
    <Route path='/Certification' element={[<MenuPortfolio/>,<Certification/>]}></Route>
    <Route path='/Education' element={[<MenuPortfolio/>,<Education/>]}></Route>
    <Route path='/Contact' element={[<MenuPortfolio/>,<Contact/>]}></Route>
    <Route path='/Moodle' element={[<Menu/>,<Hello/>]}></Route>
    <Route path='/Hello' element={[<Menu/>,<Hello/>]}></Route>
    <Route path='/League' element={[<Menu/>,<League/>]}></Route>
    <Route path='/Social' element={[<Menu/>,<Social/>]}></Route>
    <Route path='/Congrats' element={[<Menu/>,<Congrats/>]}></Route>
    <Route path='/Notification' element={[<Menu/>,<Notification/>]}></Route>
    <Route path='/Login' element={[<Menu/>,<Login/>]}></Route>
    <Route path='/Technology' element={[<Menu/>,<Technology/>]}></Route>
    <Route path='/Fruits' element={[<Menu/>,<Fruits/>]}></Route>
    <Route path='/Feedback' element={[<Menu/>,<Feedback/>]}></Route>
    <Route path='/Feedback2' element={[<Menu/>,<Feedback2/>]}></Route>
    <Route path='/DateFunction' element={[<Menu/>,<DateFunction/>]}></Route>
    <Route path='/Hooks' element={[<Menu/>,<Hooks/>]}></Route>
    <Route path='/Product' element={[<Menu/>,<Product/>]}></Route>
   </Routes>
   
   
   </BrowserRouter>

   
   
   </>
  );
}

export default App;


