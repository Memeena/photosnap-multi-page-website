import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import { useEffect, useState } from "react";

export default function App() {
  const [width, setWidth] = useState(0); //To update the width state based on the device

  function updateWidth() {
    const width = window.innerWidth;
    setWidth(width);
  }

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout width={width} />}>
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
