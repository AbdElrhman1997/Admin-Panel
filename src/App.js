import Ecommerce from './Pages/Ecommerce/Ecommerce';
import Orders from './Pages/Orders/Orders';
import Employees from './Pages/Employees/Employees';
import Customers from './Pages/Customers/Customers';
import Calnder from './Pages/Calendar/Calendar';
import Kanban from './Pages/Kanban/Kanban';
import Editor from './Pages/Editor/Editor';
import ColorPicker from './Pages/ColorPicker/ColorPicker';
import Line from './Pages/Charts/Line/Line';
import Area from './Pages/Charts/Area/Area';
import Bar from './Pages/Charts/Bar/Bar';
import Pie from './Pages/Charts/Pie/Pie';
import Financial from './Pages/Charts/Financial/Financial';
import ColorMapping from './Pages/Charts/ColorMapping/Color-Mapping';
import Pyramid from './Pages/Charts/Pyramid/Pyramid';
import SideBar from './Components/SideBar/SideBar';

import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App flex">
      <SideBar/>
      <Routes>
        <Route path='/' element={<Ecommerce/>}/>  
        <Route path='/Orders' element={<Orders/>}/>  
        <Route path='/Employees' element={<Employees/>}/>  
        <Route path='/Customers' element={<Customers/>}/>  
        <Route path='/Calnder' element={<Calnder/>}/>  
        <Route path='/Kanban' element={<Kanban/>}/>  
        <Route path='/Editor' element={<Editor/>}/>  
        <Route path='/ColorPicker' element={<ColorPicker/>}/>  
        <Route path='/Line' element={<Line/>}/>  
        <Route path='/Area' element={<Area/>}/>  
        <Route path='/Bar' element={<Bar/>}/>  
        <Route path='/Pie' element={<Pie/>}/>  
        <Route path='/Financial' element={<Financial/>}/>  
        <Route path='/ColorMapping' element={<ColorMapping/>}/>  
        <Route path='/Pyramid' element={<Pyramid/>}/>          
      </Routes>
    </div>
  );
}

export default App;
