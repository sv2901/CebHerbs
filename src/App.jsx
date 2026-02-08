import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Category from "./pages/Category.jsx";
import Enquiry from "./pages/Enquiry.jsx";
import About from "./pages/About.jsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryId" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Layout>
  );
};

export default App;
