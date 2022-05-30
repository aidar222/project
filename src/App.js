import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./Components/NavBar/Navbar";
import ProductContextProvider from "./Context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <PrimarySearchAppBar />
        <MainRoutes />
      </ProductContextProvider>
    </BrowserRouter>
  );
};

export default App;
