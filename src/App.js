import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  const message =("Los mejores productos para jugar al baloncesto⛹️‍♂️");
  const add =()=>{
    console.log("Agregaste el producto");
  }
  return (
    <>
    <ChakraProvider>
    <NavBar/>
    <ItemListContainer/>
    <ItemCount stock={7} initial={1} onAdd={add}/>
    </ChakraProvider>
    </>
  );
}

export default App;
