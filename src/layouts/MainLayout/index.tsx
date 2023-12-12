import Box from "components/Box";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const MainLayout = () => {
  return (
    <Box>
      <Header />

      <Box
        height="calc(100vh - 140px)"
        backgroundImage="linear-gradient(to right, #8F4791, #D9659C,#F7A050, #FAA051,#CF642D)"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
