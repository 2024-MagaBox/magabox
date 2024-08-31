import { Route, Routes } from "react-router-dom";
import Event from "../../pages/Event";
import EventContents from "../../pages/EventContents";
import MainPage from "../../pages/MainPage";
import MyPage from "../../pages/MyPage";
import Layout from "./Layout";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import Body from "../../woo/Organisms/Body";
import SeatsChoose from "../../woo/Molecules/SeatsChoose";

const Routing = () => {
  return (
    <div className="w-screen font-Pretendard">
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:Id" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event:eventContentsId" element={<EventContents />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/seat" element={<Body />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Routing;
