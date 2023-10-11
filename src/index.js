import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from './components/Products';
import Contact from './components/Contact';
const router = createBrowserRouter([{
  path: '/',
  element: <App/>
},{
  path: '/products',
  element: <Products/>
},{
  path: '/contact',
  element: <Contact/>
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
