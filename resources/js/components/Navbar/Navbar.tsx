import React from 'react';
import { useHistory } from 'react-router-dom';
import { routerPath } from '@/router/common';

const Navbar = (): React.ReactElement => {
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <a
        className="navbar-brand"
        href={routerPath.HOME}
        onClick={(event): void => {
          event.preventDefault();
          history.push(routerPath.HOME);
        }}>
        LOGO HERE
      </a>
    </nav>
  );
};

export default Navbar;
