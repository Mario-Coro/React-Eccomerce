import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  const message =("Los mejores productos para jugar al baloncesto⛹️‍♂️")
  const add =()=>{
    console.log("Agregaste el producto");
  }
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={message} />
    <ItemCount stock={7} initial={1} onAdd={add}/>
  </>
  );
}

export default App;
