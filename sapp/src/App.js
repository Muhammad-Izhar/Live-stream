import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Recording from "./components/records/Recording";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="recording" element={<Recording />} />
    </Routes>
  );
}

export default App;
