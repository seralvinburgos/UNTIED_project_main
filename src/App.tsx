import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';


// pages
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Categories from './pages/Categories';
import Sale from './pages/Sale';
import Search from './pages/Search';
import Login from './pages/Login';


// layouts
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="categories" element={<Categories />} />
      <Route path="sale" element={<Sale />} />
      <Route path="search" element={<Search />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
