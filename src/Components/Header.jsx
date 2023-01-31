import { useScreenSize } from "../Components/hooks/useScreenSize";

const Header = () => {
  const { isMobile } = useScreenSize();
  return (
    <header className="ArticlesHeader">
      {isMobile ? "Mobile" : ""} NC News
    </header>
  );
};

export default Header;
