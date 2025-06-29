import './App.css'
import Navbar from '../src/Pages/Navbar.jsx'
import Body from '../src/Pages/Body.jsx'
import Demand from '../src/Pages/Demand.jsx'
import Products from './Pages/Products.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Demand />
      <Products />
    </div>
  );
}

export default App;
