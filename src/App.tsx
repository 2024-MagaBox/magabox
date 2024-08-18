import MainPage from "./pages/MainPage";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
