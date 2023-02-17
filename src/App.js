import './App.css';
import Home from './components/Home';
import {useState} from "react";

function App() {
    let [cart, setCart] = useState(new Map());

    function cardHandler(name, count) {
        setCart(cart.set(name, count));
    }

    function subHandle() {
        console.log(cart)
    }

    function getVal(name) {
        if (cart.get(name) === undefined || cart === undefined){
            return 0;
        } else {
            return cart.get(name)
        }
    }

  return (
    <div className="App">
    <Home getVal={getVal} subHandle={subHandle} cardHandler={cardHandler}/>
    </div>
  );
}

export default App;
