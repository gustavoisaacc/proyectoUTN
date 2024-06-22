import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import DashoardPage from "./pages/DashoardPage";
import DashboarLayout from "./layout/DashboarLayout";
import ProducPage from "./pages/ProducPage";
import MenuLista from "./pages/Menu";
import Signin from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/useAuth";

function App() {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuLista />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
      <Route element={<DashboarLayout isAllow={isAuth} redirectTo="/signin" />}>
        <Route path="/dashboard" element={<DashoardPage />} />
        <Route path="/products" element={<ProducPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
