import Home from "./pages/Home";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { Route, Routes} from 'react-router-dom';
import Navbar from "./essentials/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </>
  );
}

export default App;
