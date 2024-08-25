import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Crew } from "./Pages/Crew";
import { Destination } from "./Pages/Destination";
import { Technology } from "./Pages/Technology";
import { Header } from "./Components/Header";
import './App.css';
import { Mars } from "./Pages/Mars";
import { Europa } from "./Pages/Europa";
import { Titan } from "./Pages/Titan";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/mars" element={<Mars />} />
            <Route path="/europa" element={<Europa />} />
            <Route path="/titan" element={<Titan />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
