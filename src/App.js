import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from "./components/Context/CartContext";

function App() {
  const message = "Los mejores productos para jugar al baloncesto⛹️‍♂️";
  return (
    <>
      <BrowserRouter>
      <CustomProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categories/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/Item/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          </CustomProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
