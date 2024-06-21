import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import DashoardPage from "./pages/DashoardPage";
import DashboarLayout from "./layout/DashboarLayout";
import ProducPage from "./pages/ProducPage";
import AdminCategoryRole from "./pages/AdminCategoryRole";
import NotFound from "./pages/NotFound";
import MenuLista from "./pages/Menu";

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
          <Route path="/Menu" element={<MenuLista/>} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
