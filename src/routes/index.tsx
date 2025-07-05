import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}
