import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./auth/AuthContext";
import NewUserForm from "./pages/NewUserForm";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import HubPage from "./pages/HubPage";
import AllStaffPage from "./pages/AllStaffPage";
import AppointmentPage from "./pages/AppointmentPage";
import DepartmentStaffPage from "./pages/DepartmentStaffPage";
import AllDoctorsPage from "./pages/AllDoctorsPage";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HubPage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/create-new-user" element={<NewUserForm/>} />
            <Route path="/chat" element={<ChatPage/>} />
            <Route path="/all-staff" element={<AllStaffPage />} />
            <Route path="/book-appointment" element={<AppointmentPage />} />
            <Route path="/doctors" element={<AllDoctorsPage />} />
            <Route path="/department-staff" element={<DepartmentStaffPage />} />

          
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
