import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import MainPage from './pages/MainPage/MainPage'
import Catalog from './pages/CatalogPage/Catalog'
import CartPage from './pages/CartPage/CartPage'
import ItemsFromCategoryPage from './pages/ItemsFromCategoryPage/ItemsFromCategory'
import SingleItemPage from './pages/SingleItemPage/SingleItemPage'
import AllItemPage from './pages/AllItemPage/AllItemPage'
import SalesPage from './pages/SalesPage/SalesPage'
import SignUpPage from './pages/SignUpPage/SignUp' 
import ErrorView from './pages/ErrorViewPage/ErrorView'
import Footer from './components/Footer/Footer'
import OrderConfirmation from './components/Cart/CartContainer/OrderConformation'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategories } from './UI/requsts/getAllCategories';
import { getAllProducts } from './UI/requsts/getAllProducts'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <NavMenu/>

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/catalog" element={<Catalog/>}></Route> 
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path='/categories/:id' element={<ItemsFromCategoryPage/>}></Route>
        <Route path='/products/:id' element={<SingleItemPage/>}></Route>
        <Route path="/allProducts" element={<AllItemPage/>}></Route>
        <Route path="/sale" element={<SalesPage/>}></Route>
        <Route path="/signUp" element={<SignUpPage/>}></Route> 
        <Route path="/*" element={<ErrorView/>}></Route>
        <Route path="/orderConfirmation" element={<OrderConfirmation />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
};

