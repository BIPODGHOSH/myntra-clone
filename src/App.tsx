import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={ <Login/>} />
      </Routes>
    </>
  );
}

export default App;
