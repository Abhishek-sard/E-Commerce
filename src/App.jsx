import './App.css'
import Navbar from '../src/Pages/Navbar.jsx';
import Body from '../src/Pages/Body.jsx';
import Demand from '../src/Pages/Demand.jsx';
import Products from './Pages/Products.jsx';
import Customer from './Pages/Customer.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Demand />
      <Products />
      <Customer />
    </div>
  );
}

export default App;
