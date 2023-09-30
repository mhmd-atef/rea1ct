import React  from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Layers from "./components/Layers/Layers";
import "./App.css";


let router = createBrowserRouter([
  { path: '/', element: <Layers />, children: [
    {index:true , element:<Home/>},
    {path:'About' , element:<About/>},
    {path:'Layers' , element:<Layers/>},
    {path:'*' , element:<div className="  container-fluid   bg-danger">
    <div className="row justify-content-center  vh-100">
      <div className=" text-black col-md-6    text-center m-auto  fw-bolder"><h1>Not Found <span  className="text-dark align-content-cetner text-center m-auto col-md-2 d-flex">4 0 4</span> </h1></div>
    </div>
    </div>},

  ] }
])











function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
