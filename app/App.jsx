import HomePage from "./pages/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ListPage from './pages/listPage/listPage'
import Layout from "./pages/layout/layout";
import * as React from 'react';
//import Map from 'react-map-gl';
function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element:<HomePage/>
        },
        {
          path: '/list',
          element:<ListPage/>
        },
      ]
    }
  ]);
  return (
    
    <RouterProvider router ={router}/>
    
 
  )
}

export default App