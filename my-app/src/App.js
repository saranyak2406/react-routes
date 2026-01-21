import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure this is here
import MachineLearning from "./MachineLearning";
import MainLayout from "./MainLayout";
import Login from "./Login";
import Register from "./Register";
import SuperMainLayout from "./SuperMain";
import Settings from "./Settings";
import Home from "./Home"; // Import your new Home page

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login / Register (no navbar) */}
        <Route path="/" element={<SuperMainLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* App pages (with navbar) */}
        <Route element={<MainLayout />}>
          <Route path="/app/home" element={<Home />} />
          <Route path="/app/machine-learning" element={<MachineLearning />} />
          <Route path="/app/settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
