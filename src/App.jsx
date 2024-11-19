import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="stories" element={<Stories />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
