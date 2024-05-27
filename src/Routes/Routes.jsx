import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Books from "../Pages/Navigated/Books";



  export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
          {
            path:"/books",
            element:<Books/>,
          }
        ]
    }
  ])
