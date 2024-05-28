import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Books from "../Pages/Navigated/Books";
import AddBooks from "../Pages/Navigated/AddBooks";



  export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
          {
            path:"/books",
            element:<Books/>,
          },
          {
            path:"/addbooks",
            element:<AddBooks/>,
          }
        ]
    }
  ])
