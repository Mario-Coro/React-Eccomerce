import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  const message =("Los mejores productos para jugar al baloncesto⛹️‍♂️")
  return (
    <>
    <ChakraProvider>
    <NavBar/>
    <ItemListContainer/>
    </ChakraProvider>
    </>
  )
}

export default App
