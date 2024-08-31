import { Route, Routes } from "react-router-dom";
import Event from "../../pages/Event";
import MainPage from "../../pages/MainPage";
import MyPage from "../../pages/MyPage";
import Layout from "./Layout";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import SeatReservationPage from "../../pages/SeatReservationPage";
import StorePage from "../../pages/StorePage";
import UserFindPage from "../../pages/UserFindPage";

const Routing = () => {
  return (
    <div className="w-screen font-Pretendard">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:Id" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event:eventContentsId" element={<Event />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userfind" element={<UserFindPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/seatreservation" element={<SeatReservationPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Routing;
