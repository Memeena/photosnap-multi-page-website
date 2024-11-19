import AppNav from "../Layout/AppNav";
import MobileNav from "../Layout/MobileNav";

export default function Header({ width }) {
  return (
    <div>
      <img src="./images/shared/desktop/logo.svg" alt="logo" />

      {width < 520 ? <MobileNav /> : <AppNav />}
    </div>
  );
}
