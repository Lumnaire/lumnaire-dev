import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import HireDeveloper from '../pages/HireDeveloper'
import Contact from '../pages/Contact'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/hire-developer" element={<HireDeveloper />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
)

export default AppRoutes
