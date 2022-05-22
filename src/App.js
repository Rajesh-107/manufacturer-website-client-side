import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Home/About';
import Home from './Home/Home';
import Login from './Login/Login';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
       
    </div>
  );
}

export default App;
