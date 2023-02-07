import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from 'react-router-dom'
import './App.css'


// pages
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Categories from './pages/Categories';
import Trail from './pages/Trail';
import Road from './pages/Road';
import Lifestyle from './pages/Lifestyle';
import Hiking from './pages/Hiking';
import Comfort from './pages/Comfort';
import Sale from './pages/Sale';
import Search from './pages/Search';
import Login from './pages/Login';


// layouts
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="categories" element={<Categories />} />
      <Route path="trail" element={<Trail />} />
      <Route path="road" element={<Road />} />
      <Route path="lifestyle" element={<Lifestyle />} />
      <Route path="hiking" element={<Hiking />} />
      <Route path="comfort" element={<Comfort />} />
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
