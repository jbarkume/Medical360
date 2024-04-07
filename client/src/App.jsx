import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./auth/AuthContext";
import NewUserForm from "./pages/NewUserForm";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
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
import UnscheduledAppointments from "./pages/UnscheduledApptPage";
import AllEquipmentPage from "./pages/AllEquipmentPage";
import EditPatientInfoPage from "./pages/EditPatientInfoPage";
import EmergencyReassignment from "./pages/EmergencyAssignmentPage";
import DepartmentRatioPage from "./pages/DepartmentRatioPage";
import PatientInfo from "./pages/PatientInfo";
import DoctorInfo from "./pages/DoctorInfo";
import DeleteEquipment from "./pages/DeleteEquipment";
import DeleteRoom from "./pages/DeleteRoom";
import AllRoomsPage from "./pages/AllRoomsPage";
import AllPatientPage from "./pages/AllPatientPage";
import EditPatientPage from "./pages/EditPatientPage";
import PatientList from "./pages/PatientList";
import AdminEquipment from "./pages/AdminEquipment";
import AdminRoom from "./pages/AdminRoom";
import PatientNotification from "./pages/PatientNotification";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apppage" element={<AppPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/new-user" element={<NewUserForm />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/all-staff" element={<AllStaffPage />} />
          <Route path="/all-equipments" element={<AllEquipmentPage />} />
          <Route path="/all-rooms" element={<AllRoomsPage />} />
          <Route path="/all-patients" element={<AllPatientPage />} />
          <Route path="/book-appointment" element={<AppointmentPage />} />
          <Route path="/all-doctors" element={<AllDoctorsPage />} />
          <Route path="/editequipmentpage" element={<EditEquipmentPage />} />
          <Route path="/editroompage" element={<EditRoomPage />} />
          <Route path="/edit-patient" element={<EditPatientPage />} />
          <Route path="/department-staff" element={<DepartmentStaffPage />} />
          <Route path="/departmentpage" element={<DepartmentPage />} />
          <Route path="/new-equipment" element={<NewEquipmentPage />} />
          <Route path="/new-room" element={<NewRoomPage />} />
          <Route path="/new-patient" element={<NewPatientPage />} />
          <Route path="/deleteuser" element={<DeleteUserPage />} />
          <Route path="/equipments" element={<EquipmentPage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/patientpage" element={<PatientPage />} />
          <Route
            path="/resource-management"
            element={<ResourceManagementPage />}
          />
          <Route path="/bugs" element={<BugReport />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route
            path="/cancel-appointment"
            element={<CancelAppointmentForm />}
          />
          <Route path="/unscheduled" element={<UnscheduledAppointments />} />
          <Route
            path="/resource-management"
            element={<ResourceManagementPage />}
          />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/edit-patient" element={<EditPatientInfoPage />} />
          <Route path="/patientinfo" element={<PatientInfo />} />
          <Route path="/doctorinfo" element={<DoctorInfo />} />
          <Route path="/delete-equipment" element={<DeleteEquipment />} />
          <Route path="/delete-room" element={<DeleteRoom />} />
          <Route path="/emergency" element={<EmergencyReassignment />} />
          <Route path="/departmentratio" element={<DepartmentRatioPage />} />
          <Route path="/patient-list" element={<PatientList />} />
          <Route path="/equipment-list" element={<AllEquipmentPage />} />
          <Route path="/room-list" element={<AllRoomsPage />} />
          <Route path="/admin-equipment" element={<AdminEquipment />} />\
          <Route path="/admin-room" element={<AdminRoom />} />
          <Route path="/admin-notification" element={<PatientNotification />} />
          <Route path="/departmentratio" element={<DepartmentRatioPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;