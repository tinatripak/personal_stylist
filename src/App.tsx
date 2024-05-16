import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import './styles/index.scss'

const Home = lazy(() => import('./pages/Home/Home'))
const Values = lazy(() => import('./pages/Values/Values'))
const Services = lazy(() => import('./pages/Services/Services'))
const Service = lazy(() => import('./pages/Services/Service/Service'))
const Reviews = lazy(() => import('./pages/Reviews/Reviews'))
const Products = lazy(() => import('./pages/Products/Products'))

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="values" element={<Values />} />
        <Route path="services" element={<Services />} />
        <Route path="service/:id" element={<Service />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </Suspense>
  </Router>
)
export default App
