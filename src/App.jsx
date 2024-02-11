import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import AllPro from "./pages/AllPro";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Up from "./Components/Up";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprojects" element={<AllPro />} />
      </Routes>
      <Up />
      <Footer />
    </div>
  );
}

export default App;
