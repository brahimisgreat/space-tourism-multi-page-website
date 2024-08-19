import './App.css'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import {Home} from './Pages/Home'
import {Crew} from './Pages/Crew'
import { Destination } from './Pages/Destination'
import { Technology } from './Pages/Technology'
import { Header } from './Components/Header'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew/>} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
