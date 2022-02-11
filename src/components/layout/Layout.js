import { Fragment } from "react/cjs/react.production.min";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        Website developed by Thaisa Lima :){" "}
      </footer>
    </Fragment>
  );
};

export default Layout;
