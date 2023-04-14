import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Edit from "./Pages/Edit/Edit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <p className="text-5xl mt-8 pl-8 font-serif font-bold">TO-DO-LIST</p>

      <BrowserRouter>
        <ToastContainer position="top-right" />
        <Routes>
          <Route path="/" element=<Home />></Route>
          <Route path="/edit/:id" element=<Edit />></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
