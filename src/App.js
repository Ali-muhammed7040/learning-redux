import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import Product from './components/Product';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Route>
    )
  );
  return (
    <div >

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
