import React from "react";
import Navbar from "@/components/navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import LogIn from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Dashboard from "./pages/dashboard";
import InnerDash from "./components/dashboard/dashboard";
import Profile from "./components/dashboard/profile";
import Referrals from "./components/dashboard/referrals";
import Settings from "./components/dashboard/settings";
import Support from "./components/dashboard/support";
import Trades from "./components/dashboard/trades";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<InnerDash />} />
          <Route path="profile" element={<Profile />} />
          <Route path="referrals" element={<Referrals />} />
          <Route path="setting" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="trades" element={<Trades />} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
