import React from "react";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Products from "./components/Products";

const App = () => {
  return (
    <Layout>
      <h1>Welcom Home!</h1>
      <Products />
    </Layout>
  );
};

export default App;
