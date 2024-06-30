import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./container/Home";
import Pen from "./container/Pen";
import Signup from "./container/Signup";

function App() {

  return (
    <>
    <Routes>
      <Route path="/home/*" element={<Home />} />
      {/* If route not matching */}
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/pen" element={<Pen />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App;
