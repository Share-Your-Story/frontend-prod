import React from "react";
import "../Css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Layout from "./Layout/Layout";
import Account from "./Account/Account";
import Create from "./Create/Create";
import Trending from "./Trending/Trending";
import Login from "./Account/Login";
import Register from "./Account/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/create" element={<Create />} />
          <Route path="/account" element={<Account username="" />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
