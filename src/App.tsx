import React, { lazy, ReactNode, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import './styles/index.scss'
import useScrollToTop from './ScrollDown'

const Home = lazy(() => import('./pages/Home/Home'))
const Values = lazy(() => import('./pages/Values/Values'))
const Services = lazy(() => import('./pages/Services/Services'))
const Service = lazy(() => import('./pages/Services/Service/Service'))
const Products = lazy(() => import('./pages/Products/Products'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy/RefundPolicy'))

interface ScrollHandlerProps {
  children: ReactNode
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ children }) => {
  useScrollToTop()
  return <>{children}</>
}

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <ScrollHandler>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="values" element={<Values />} />
            <Route path="services" element={<Services />} />
            <Route path="service/:id" element={<Service />} />
            <Route path="products" element={<Products />} />
            <Route path="refundPolicy" element={<RefundPolicy />} />
          </Routes>
        </ScrollHandler>
      </Suspense>
    </Router>
  )
}

export default App
