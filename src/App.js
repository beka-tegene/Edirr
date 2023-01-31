import { Route, Routes } from "react-router-dom";
import Notification from "./components/UserDashboard/Notification/Notification";
import ForgetPassword from "./pages/ForgetPassword";
import Landing from "./pages/Landing";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Edirr from "./pages/User/Edirr";
import EdirrAvailable from "./pages/User/EdirrAvailable";
import Payment from "./pages/User/Payment";
import Profile from "./pages/User/Profile";
import Requests from "./pages/User/Requests";
import UpdateProfile from "./pages/User/UpdateProfile";
import UserDashboardPage from "./pages/User/UserDashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/*  */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/*  */}
        <Route path="/dashboard" element={<UserDashboardPage />} />
        <Route path="/my-edirr" element={<Edirr />} />
        <Route path="/available-edirr" element={<EdirrAvailable />} />
        <Route path="/request" element={<Requests />} />
        <Route path="/my-account" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/update-account" element={<UpdateProfile />} />
        <Route path="/chat" element={<Notification />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
