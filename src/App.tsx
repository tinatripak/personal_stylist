import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import './styles/index.scss'

const Home = lazy(() => import('./pages/Home/Home'))
const Values = lazy(() => import('./pages/Values/Values'))
const Services = lazy(() => import('./pages/Services/Services'))
const Reviews = lazy(() => import('./pages/Reviews/Reviews'))

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="values" element={<Values />} />
        <Route path="services" element={<Services />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </Suspense>
  </Router>
)
export default App
