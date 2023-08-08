import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import FooterComponent from "../Footer/FooterComponent";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default Root;
