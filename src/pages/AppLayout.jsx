import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout({ width }) {
  return (
    <div>
      <Header width={width} />
      <Outlet />
    </div>
  );
}
