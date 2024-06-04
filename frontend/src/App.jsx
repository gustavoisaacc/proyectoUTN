<<<<<<< HEAD
import Navbar from "./components/navbar";

function App() {
  return (
    <>
    <Navbar/>
    </>

=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> 2ff7f225e173ab53b657b810561c4baf35668eba
  );
}

export default App;
