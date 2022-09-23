import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const message = "Los mejores productos para jugar al baloncesto⛹️‍♂️";
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
      </ChakraProvider>
    </>
  );
}

export default App;
