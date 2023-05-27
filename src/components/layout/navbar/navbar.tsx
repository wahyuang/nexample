import AuthLink from "./auth-link";
import NavMenu from "./nav-menu";

export default function Navbar() {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-4">
        <NavMenu />
        <AuthLink />
      </div>
    </div>
  );
}
