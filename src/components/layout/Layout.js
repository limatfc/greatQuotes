import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <article className={classes.article}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        Website developed by Thaisa Lima :)
      </footer>
    </article>
  );
};

export default Layout;
