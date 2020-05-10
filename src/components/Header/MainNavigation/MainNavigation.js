import React from "react";
import PropTypes from "prop-types";
import MainNavigationComponent from "components/Header/MainNavigation/MainNavigationStyles";

import NavLink from "components/Header/NavLink/NavLink";
import { useQueryMenuData } from "hooks/useQueryMenuData";
import { useRelative } from "hooks/useRelative";

const MainNavigation = ({ isMenuOpen }) => {
  const mainMenu = useQueryMenuData().nodes.find(
    (menu) => menu.slug === "main-menu"
  );
  return (
    <MainNavigationComponent isMenuOpen={isMenuOpen}>
      <ul className="main-navigation">
        {mainMenu.menuItems.nodes.map((item) => {
          const relativeLink = useRelative(item.url);
          return (
            <li key={item.id} className="main-navigation__item">
              <NavLink activeClassName="active" to={relativeLink}>
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </MainNavigationComponent>
  );
};

MainNavigation.propTypes = {
  isMenuOpen: PropTypes.bool,
};

MainNavigation.defaultProps = {
  isMenuOpen: false,
};

export default MainNavigation;
