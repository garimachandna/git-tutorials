import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Policy from "./pages/policy";
import Pagenotfound from "./pages/pagenotfound";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

import Dashboard from "./pages/user/dashboard";
import PrivateRoute from "./components/routes/private";
import ForgotPassword from "./pages/auth/forgotpassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
