import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import DashoardPage from "./pages/DashoardPage";
import DashboarLayout from "./layout/DashboarLayout";
import ProducPage from "./pages/ProducPage";
import CreateRolCategory from "./components/createRol";
import AdminCategoryRole from "./pages/AdminCategoryRole";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<DashboarLayout />}>
          <Route path="/dashboard" element={<DashoardPage />} />
          <Route path="/products" element={<ProducPage />} />
          <Route path="/AdministrarRoles" element={<AdminCategoryRole />} />

        </Route>
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
