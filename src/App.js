import React from 'react'
import ProductList from './Components/ProductList/ProductList'
import ResponsiveAppBar from './Components/Navbar/ResponsiveAppBar.tsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <ResponsiveAppBar />
    < ProductList />
    </>
  )
}

export default App