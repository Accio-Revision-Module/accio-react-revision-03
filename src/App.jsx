import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import User from "./pages/user";
import Performance from "./pages/performance";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Performance />} path="/memo" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<User />} path="/user/:id" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
