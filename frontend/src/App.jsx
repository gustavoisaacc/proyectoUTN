import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

import DashoardPage from "./pages/DashoardPage";
import DashboarLayout from "./layout/DashboarLayout";
import ProducPage from "./pages/ProducPage";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import AboutUs from "./pages/AboutUs"



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
        </Route>
          <Route path="*" element={<NotFound/>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="aboutus" element={<AboutUs/>}/>
          
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
