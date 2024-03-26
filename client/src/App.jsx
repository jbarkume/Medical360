import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./components/HomePage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={""} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
