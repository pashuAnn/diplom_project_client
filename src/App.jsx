import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import MainPage from './pages/MainPage/MainPage'
import Catalog from './components/Catalog/Catalog'
import CardPage from './pages/CardPage/CartPage'
import ItemsFromCategoryPage from './pages/ItemsFromCategoryPage/ItemsFromCategory'
import SingleItemPage from'./pages/SingleItemPage/SingleItemPage'
import AllItemPage from './pages/AllItemPage/AllItemPage'
import SalesPage from './pages/SalesPage/SalesPage'
import SingUpPage from './pages/SingUpPage/SingUp'
import ErrorViewPage from './pages/ErrorViewPage/ErrorViewPage'
import Footer from './components/Footer/Footer'
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => dispatch(getAllCategories), [])
  // useEffect(() => dispatch(getAllProducts), [])

  return (
    <div className="App">
      <NavMenu/>

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/catalog" element={<Catalog/>}></Route>
        <Route path="/card" element={<CardPage/>}></Route>
        <Route path='/categories/:id' element={<ItemsFromCategoryPage/>}></Route>
        <Route path='/products/:id' element={<SingleItemPage/>}></Route>
        <Route path="/allProducts" element={<AllItemPage/>}></Route>
        <Route path="/sale" element={<SalesPage/>}></Route>
        <Route path="singUp" element={<SingUpPage/>}></Route>
        <Route path="/*" element={<ErrorViewPage/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
