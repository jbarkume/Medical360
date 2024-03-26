import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import AppPage from "./components/AppPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./components/HomePage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm/>} />
       {/* <Route path="/" element={<AppPage/>} /> */}
       
    </Routes>
    </BrowserRouter>
  );
}

export default App;
