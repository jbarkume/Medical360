import RegistrationForm from "./screenpages/RegistrationForm";
import LoginForm from "./screenpages/LoginForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./auth/AuthContext";
import NewUserForm from "./screenpages/NewUserForm";
import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";
import HubPage from "./components/HubPage";
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
