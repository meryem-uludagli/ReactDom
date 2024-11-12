import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Undefined from "./pages/Undefined";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Detail/:id" element={<Detail />} />

          {/* Category için alt yollar tanımlanıyor */}
          <Route path="/Category" element={<Category />}>
            <Route path="hikaye" element={<h1>HIKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route>

          {/* Tanımsız yollar için */}
          <Route path="*" element={<Undefined />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
