import { Route, Routes } from "react-router-dom";
import "animate.css/animate.min.css";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import ComputerParts from "./Pages/Portfolio-details/ComputerParts";
import Laptop from "./Pages/Portfolio-details/Laptop";
import Photography from "./Pages/Portfolio-details/Photography";
import MainSkill from "./Pages/Component/MainSkill";
import Education from "./Pages/Component/Education";
import Certificat from "./Pages/Component/Certificat";
function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<MainSkill />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="certificate" element={<Certificat />}></Route>
        </Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
