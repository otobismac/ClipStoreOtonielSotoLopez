import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/container/ItemListContainer";
import Footer from "./components/footer/Footer";

const categories = ["PRODUCTOS", "PROMOCIONES", "SERVICIOS", "CONTACTO"]

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar categories={categories}/>
      <ItemListContainer/>
      <Footer />
    </div>
  );
}

export default App;
