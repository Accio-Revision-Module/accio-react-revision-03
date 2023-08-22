import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import User from "./pages/user";
import Performance from "./pages/performance";
import CustomHooks from "./pages/custom-hooks";
import GetData from "./pages/get-data";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Performance />} path="/memo" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<User />} path="/user/:id" />
          <Route element={<CustomHooks />} path="/custom-hooks" />
          <Route element={<GetData />} path="/get-data" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
