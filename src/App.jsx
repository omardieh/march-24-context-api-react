import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useThemeContext } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={"main " + theme}>
      <Navbar>
        <NavLink to="/about"> About </NavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<div> about page </div>} />
      </Routes>
    </div>
  );
}

export default App;
