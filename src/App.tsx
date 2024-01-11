import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
