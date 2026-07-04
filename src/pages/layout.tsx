import { Outlet } from "react-router";
import styles from "./layout.module.scss";
import { NavBar } from "components/navbar";
import { Footer } from "components/footer";

export const DefaultLayout = () => {
  return (
    <div className={styles.shell}>
      <NavBar />
      <div className={styles.main}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
