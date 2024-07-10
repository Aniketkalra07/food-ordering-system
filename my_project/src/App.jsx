import React from "react";
import{BrowserRouter,Route,Routes}from "react-router-dom";
import Home from "./pages/home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () =>{
  return(
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Success"
        element={<ProtectedRoute element={<Success/>}/>}/>
       <Route path="/*" element={<Error/>}/>

     </Routes>
    </BrowserRouter>
  )

}

export default App