import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  const message =("Los mejores productos para jugar al baloncesto⛹️‍♂️")
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={message}/>
  </>
  );
}

export default App;
