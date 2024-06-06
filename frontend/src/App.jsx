import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import DashoardPage from "./pages/DashoardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/dashboard" element={<DashoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
