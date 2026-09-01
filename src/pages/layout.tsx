import { Footer } from "components/footer";
import { NavBar } from "components/navbar";
import { Outlet } from "react-router";
import pageStyles from "./layout.module.scss";

export const DefaultLayout = () => {
  return (
    <div className={pageStyles.shell}>
      <NavBar />
      <div className={pageStyles.main}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
