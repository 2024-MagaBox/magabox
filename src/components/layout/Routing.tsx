import { Route, Routes } from "react-router-dom";
import Event from "../../pages/Event";
import EventContents from "../../pages/EventContents";
import MainPage from "../../pages/MainPage";
import MyPage from "../../pages/MyPage";
import Layout from "./Layout";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";

const Routing = () => {
  return (
    <div className="w-screen font-Pretendard">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:Id" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/event" element={<Event />} />
          <Route path="event/eventcontents" element={<EventContents />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Routing;
