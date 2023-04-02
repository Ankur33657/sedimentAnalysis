import './App.css';
import Nav from './component/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import PrivateComponent from './component/privatecomponent';
import Addproduct  from './component/Addproduct';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
function App() {
  return (
    <>
    <BrowserRouter>
   <Nav />
   <Routes>

    <Route element={<PrivateComponent/>}>
     <Route path="/" element={<ProductList/>}/>
     <Route path="/add" element={<Addproduct/>}/>
     <Route path="/update" element={<h1>popular product items</h1>}/>
     <Route path="/logout" element={<h1>Logout page</h1>}/>
     <Route path="/profile" element={<h1>profile page</h1>}/>
     </Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/detail" element={<ProductDetails/>}/>
   </Routes>
     
    </BrowserRouter>
    </>
  );
}

export default App;
