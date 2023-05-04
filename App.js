
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Layout/Header';
import Home from './Component/Layout/Pages/Home';
import Service from './Component/Layout/Pages/Service';
import About from './Component/Layout/Pages/About';
import Contact from './Component/Layout/Pages/Contact';

function App() {
  return (

    <>

    <Header/>

    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>}/>
      
    </Routes>
    </>
    
  );
}

export default App;
