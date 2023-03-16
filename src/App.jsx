import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Host from './pages/Host'
import VanDetails from './pages/VanDetails'
import './server.js'
import Layout from './components/Layout'


export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />}/>  
        <Route path="/Vans/:id" element={<VanDetails />}/>
        <Route path="/Host" element={<Host />}/>
        </Route> 
      </Routes>
    </div>
  )
}

