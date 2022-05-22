import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Home/About';
import Home from './Home/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
