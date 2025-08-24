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

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="forgotUsername" element={<ForgotUsername />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
