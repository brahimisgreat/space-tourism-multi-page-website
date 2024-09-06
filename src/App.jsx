import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Crew } from "./Pages/Crew";
import { Destination } from "./Pages/Destination";
import { Technology } from "./Pages/Technology";
import { Header } from "./Components/Header";
import './App.css';
import { useState } from "react";

function App() {
  const [path, setPath] = useState('app');

 
  return (
    <>
      <div className={path}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home  setPath={setPath} path={path} />} />
            <Route path="/destination" element={<Destination setPath={setPath} path={path} />} />
            <Route path="/crew" element={<Crew setPath={setPath} path={path} />} />
            <Route path="/technology" element={<Technology setPath={setPath} path={path} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
