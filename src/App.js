
import { Route, Routes } from 'react-router-dom';
import "animate.css/animate.min.css";
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import ComputerParts from './Pages/Portfolio-details/ComputerParts';
import Laptop from './Pages/Portfolio-details/Laptop';
import Photography from './Pages/Portfolio-details/Photography';
function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/photography' element={<Photography></Photography>}></Route>
        <Route path='/laptop' element={<Laptop></Laptop>}></Route>
        <Route path='/computerParts' element={<ComputerParts></ComputerParts>}></Route>       
        <Route path='/about' element={<About></About>}></Route>       
        <Route path='/blog' element={<Blog></Blog>}></Route>       
      </Routes>  
      <Footer></Footer>  
    </div>
  );
}

export default App;
