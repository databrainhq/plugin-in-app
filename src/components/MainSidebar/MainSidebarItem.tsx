import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './MainSidebar.module.css';

type SidebarItemProps = NavLinkProps & {
  children?: React.ReactNode;
  menu?: React.ReactElement;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  to,
  children,
  className,
  end,
  menu,
}) => {
  return (
    <li className="my-2">
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''} ${className ?? ''}`
        }
      >
        {children}
      </NavLink>
      {menu}
    </li>
  );
};

export default SidebarItem;
