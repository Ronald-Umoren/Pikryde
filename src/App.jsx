import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Drivers from "./pages/driverspage";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Drivers />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/users" element={<Users />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
