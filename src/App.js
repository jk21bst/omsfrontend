import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/customers/Login';
import RegisterCustomer from './components/customers/RegisterCustomer';
import ProductsList from './components/Products/ProductsList';
import AddProduct from './components/Products/AddProduct';
import OrderList from './components/orders/OrderList';
import OrderItemsList from './components/orderitems/OrderItemsList';
import TempItemsList from './components/tempItems/TempItemsList';
import NewTempItem from './components/tempItems/NewTempItem';


import CartList from './components/carts/CartList';
import AddCart from './components/carts/AddCart';
import NavbarPrimary from './components/Navbar/NavbarPrimary';
import Admin from './components/Admin/Admin';
import AdminNav from './components/Navbar/AdminNav';
import AllOrderAdmin from './components/orders/AllOrderAdmin';


function App() {
  return (
      <div className="App">
         
          
           
           <BrowserRouter>

              <Routes>
                  <Route path="/" element={< Login />} />
                  <Route path="/register" element={<RegisterCustomer />} />
                  <Route path="/productsList/:custId" element={<ProductsList />} />
                  <Route path="/addProduct" element={<AddProduct />} />
                  <Route path="/orderList/:custId" element={<OrderList />} />        
                  <Route path="/orderItemList/:custId/:orderId" element={<OrderItemsList />} />
                  <Route path="/tempItemList/:custId" element={<TempItemsList />} />
                  <Route path="/newTempItem/:custId/:productId" element={<NewTempItem />} />
                  <Route path="/cartList/:custId" element={<CartList />} />
                  <Route path="/addToCart/:custId/:productId" element={<AddCart />} />
                  <Route path="/RegisterCustomer" element={<RegisterCustomer />} />
                  <Route path="/Admin" element={<Admin />} />
                  <Route path="/AllOrderAdmin" element={<AllOrderAdmin />} />
                  <Route path="/OrderList" element={<OrderList />} />
                  <Route path ="/adminNav/admin" element={<AdminNav/>}/>
                  <Route path="/productList/:custId" element={<ProductsList/>}/>
                  <Route path ="/navbarPrimary/:custId" element={<NavbarPrimary/>}/>
                  
                  {/* <Route path ="/orderItemList/:custId/productsList/:custId" element={<productList/>}/> */}
              </Routes>
              {/* <Route path='/NavbarPrimary' element={<NavbarPrimary/>}/> */}
              </BrowserRouter>
             

    </div>
  );
}

export default App;
