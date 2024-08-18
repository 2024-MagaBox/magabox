import MainPage from "./pages/MainPage";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie" element={<MainPage />} />
          <Route path="/event" element={<MainPage />} />
          <Route path="/login" element={<MainPage />} />
          <Route path="/mypage" element={<MainPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
