import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Values from "./pages/Values/Values";
import Services from "./pages/Services/Services";
import Reviews from "./pages/Reviews/Reviews";
import "./styles/index.scss";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="values" element={<Values />} />
      <Route path="services" element={<Services />} />
      <Route path="reviews" element={<Reviews />} />
    </Routes>
  </BrowserRouter>
);
export default App;
