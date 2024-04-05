import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./auth/AuthContext";
import NewUserForm from "./pages/NewUserForm";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import HubPage from "./pages/HubPage";
import EditEquipmentPage from "./pages/EditEquipmentPage";
import AllStaffPage from "./pages/AllStaffPage";
import AppointmentPage from "./pages/AppointmentPage";
import EditRoomPage from "./pages/EditRoomPage";
import DepartmentPage from "./pages/DepartmentPage";
import DepartmentStaffPage from "./pages/DepartmentStaffPage";
import AllDoctorsPage from "./pages/AllDoctorsPage";
import RoomCard from "./components/RoomCard";
import AppPage  from './pages/AppPage'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HubPage />} />
            <Route path="/apppage" element={<AppPage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/create-new-user" element={<NewUserForm/>} />
            <Route path="/chat" element={<ChatPage/>} />
            <Route path="/all-staff" element={<AllStaffPage />} />
            <Route path="/book-appointment" element={<AppointmentPage />} />
            <Route path="/doctors" element={<AllDoctorsPage />} />
              <Route path="/editequipmentpage" element={<EditEquipmentPage/>} />
            <Route path="/editroompage" element={<EditRoomPage/>} />
          <Route path="/department-staff" element={<DepartmentStaffPage />} />
          <Route path="roomcard" element={<RoomCard/>} />
          <Route path="/departmentpage" element={<DepartmentPage/>} />
          
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
