import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/container/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/container/itemDetailContainer/ItemDetailContainer";
import CartDetail from "./components/container/cartContainer/CartDetail";
import ErrorContainer from "./components/container/errorContainer/ErrorContainer";

const categories = [
  {
    category: "TODOS",
    path: ""
  },
  {
    category: "PEQUEÑOS NEGOCIOS",
    path: "segmento/medianos"
  },
  {
    category: "GRANDES NEGOCIOS",
    path: "segmento/grandes"
  }
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar categories={categories}/>

        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/segmento/:segment" element={<ItemListContainer />}/>
          <Route path="/products/:productId/detail" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/error" element={<ErrorContainer />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
