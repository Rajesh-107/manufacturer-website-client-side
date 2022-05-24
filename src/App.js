import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import MyOrders from "./Dashboard/MyOrders";
import About from "./Home/About";
import Blogs from "./Home/Blogs";
import Bikepart from "./Home/Bikepart";
import BikePartDetail from "./Home/BikePartDetail";
import Bikeparts from "./Home/Bikeparts";
import Home from "./Home/Home";
import Review from "./Home/Review";
import Login from "./Login/Login";
import RequireAuth from "./Login/RequireAuth";
import SignUp from "./Login/SignUp";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import NotFound from "./Shared/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProfile from "./Dashboard/MyProfile";

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route
          path='/bikepart'
          element={
            <RequireAuth>
              <BikePartDetail></BikePartDetail>
            </RequireAuth>
          }></Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route
          path='dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;

{
  /* <Route
          path='/bikepart/:bikepartId'
          element={<BikePartDetail></BikePartDetail>}></Route> */
}
