import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/container/ItemListContainer";

const categories = ["PRODUCTOS", "PROMOCIONES", "SERVICIOS", "CONTACTO"]

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar categories={categories}/>
      <ItemListContainer greetings={"Bienvenido a Clip Store!!"} />
    </div>
  );
}

export default App;
