import { Route, Routes } from "react-router-dom";
import Event from "../../pages/Event";
import MainPage from "../../pages/MainPage";
import MyPage from "../../pages/MyPage";
import Layout from "./Layout";
import LoginPage from "../../pages/LoginPage";

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
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Routing;
