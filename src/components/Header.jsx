import AppNav from "../Layout/AppNav";
import MobileNav from "../Layout/MobileNav";
import Logo from "./Logo";

export default function Header({ width }) {
  return (
    <div>
      <Logo />
      {width < 520 ? <MobileNav /> : <AppNav />}
    </div>
  );
}
