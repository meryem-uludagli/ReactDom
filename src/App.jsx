import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Category" element={<Category />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
