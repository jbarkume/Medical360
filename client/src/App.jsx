import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AppPage from "./pages/AppPage";
import NewEquipmentPage from "./pages/NewEquipmentPage";
import NewRoomPage from "./pages/NewRoomPage";
import NewPatientPage from "./pages/NewPatientPage";
import DeleteUserPage from "./pages/DeleteUserPage";
import EquipmentPage from "./pages/EquipmentPage";
import RoomPage from "./pages/RoomPage";
import PatientPage from "./pages/PatientPage";
import ResourceManagementPage from "./pages/ResourceManagementPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import BugReport from "./pages/BugReportForm";
import FeedbackForm from "./pages/FeedbackForm";
import CancelAppointmentForm from "./pages/CancelAppointmentForm";
import AllEquipmentPage from "./pages/AllEquipmentPage"
import BugReportForm from "./pages/BugReportForm"

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apppage" element={<AppPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-new-user" element={<NewUserForm />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/all-staff" element={<AllStaffPage />} />
          <Route path="/book-appointment" element={<AppointmentPage />} />
          <Route path="/doctors" element={<AllDoctorsPage />} />
          <Route path="/editequipmentpage" element={<EditEquipmentPage />} />
          <Route path="/editroompage" element={<EditRoomPage />} />
          <Route path="/department-staff" element={<DepartmentStaffPage />} />
          <Route path="/departmentpage" element={<DepartmentPage />} />
          <Route path="/new-equipment" element={<NewEquipmentPage />} />
          <Route path="/new-room" element={<NewRoomPage />} />
          <Route path="/new-patient" element={<NewPatientPage />} />
          <Route path="/deleteuser" element={<DeleteUserPage />} />
          <Route path="/equipments" element={<EquipmentPage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/patientpage" element={<PatientPage />} />
          <Route path="/resource-management" element={<ResourceManagementPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
