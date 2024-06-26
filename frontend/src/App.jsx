import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footers from "./components/Footer";
import Home from "./components/Home";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addstudent" element={<AddStudent />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Footers />
      </BrowserRouter>
    </>
  );
}

export default App;
