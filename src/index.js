import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/layout.jsx";
import Index from "./pages/Index.jsx"
import EditPost from "./pages/EditPost.jsx";
import AddPost from "./pages/AddPost.jsx";
import Details from "./pages/Details.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router=createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    errorElement:<ErrorPage />,
     children: [
      {index:true, element:<Index />},
      {path:"post", element:<Index />},
      {path:"post/add", element:<AddPost />},
      {path:"post/:id/edit",element:<EditPost />},
      {path:"post/:id", element:<Details />,
        loader: ({params}) => {
      if(isNaN(params.id)){
        throw new Response("Bad Request", {statusText:"please make sure to insert correct post id", status: 400 });
      } 
       },
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
);
