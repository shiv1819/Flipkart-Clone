import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Home from './Home'
import AboutMain from './About-main';
import ArticleMain from './Article-main';
import ProductMain from './Product-Main';
import ClothesMain from './clothes-main';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About-main",
    element: <AboutMain />,
  },
  {
    path: "/Article-main",
    element: <ArticleMain />,
  },
  {
    path: "/Product-Main",
    element: <ProductMain />,
  },
  {
    path: "/clothes-main",
    element: <ClothesMain />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
