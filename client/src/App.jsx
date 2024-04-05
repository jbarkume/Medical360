import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./auth/AuthContext";
import NewUserForm from "./pages/NewUserForm";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import HubPage from "./pages/HubPage";
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
          {/* <Route path="/" element={<AppPage/>} /> */}
          
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
