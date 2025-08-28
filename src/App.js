//system
import { BrowserRouter, Routes, Route } from "react-router-dom";
//styles
import './App.css';
//components
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import LoginPage from './components/pages/Login';
import RegisterPage from './components/pages/Register';
import ForgotPassword from "./components/pages/ForgotPassword";
import ForgotUsername from "./components/pages/ForgotUsername";
import ProtectedRoute from "./components/pages/ProtectedRoute";
import GuestRoute from "./components/pages/GuestRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<GuestRoute><LoginPage /></GuestRoute>} />
        <Route path="register" element={<GuestRoute><RegisterPage /></GuestRoute>} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="forgotUsername" element={<ForgotUsername />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* more protected routes here */}
          </Route>
        </Route>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
