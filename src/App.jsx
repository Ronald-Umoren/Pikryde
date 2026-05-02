import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Drivers from "./pages/driverspage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Drivers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
