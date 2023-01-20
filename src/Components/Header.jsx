import { useScreenSize } from "../Components/hooks/useScreenSize";

const Header = () => {
  const { isMobile } = useScreenSize();
  return (
    <header className="welcome">
      Welcome to {isMobile ? "Mobile" : "Desktop"} NC News
    </header>
  );
};

export default Header;
