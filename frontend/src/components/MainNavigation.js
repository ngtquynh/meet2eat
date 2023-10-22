import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={classes.link}
              activeClassName={classes.active}
              exact
            >
              <h1>Home Page</h1>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/timeslot"
              className={classes.link}
              activeClassName={classes.active}
            >
              Time Slot
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
