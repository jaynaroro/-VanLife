import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetails from './pages/Vans/VanDetails'
import './server.js'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import HostLayout from './components/HostLayout'
import HostVan from './pages/Host/HostVan'
import HostVans from './pages/Host/HostVans'

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="vans" element={<Vans />}/>  
        <Route path="vans/:id" element={<VanDetails />}/>

        {/*Host Pages*/}
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard/>}/>
          <Route path="income" element={<Income />}/>
          <Route path="vans" element={<HostVans />}/>
          <Route path="vans/:id"  element={<HostVan />}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>

        </Route> 
      </Routes>
    </div>
  )
}

