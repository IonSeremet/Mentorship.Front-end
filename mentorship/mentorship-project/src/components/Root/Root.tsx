import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import FooterComponent from "../Footer/FooterComponent";
import { Provider } from "react-redux";
import store from "../store/store";

const Root = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      {/* <FooterComponent /> */}
    </Provider>
  );
};

export default Root;
