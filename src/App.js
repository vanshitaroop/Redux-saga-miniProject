import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { addtocart } from './redux/action';
function App() {
  const dispatch = useDispatch()
  const info = {
    color:"red",
    product:"iphone",
    price:"100000",
  }
  return (
    <div className="App">
<button type="" onClick={()=>dispatch(addtocart(info))}>add to cart</button>
    </div>
  );
}

export default App;
