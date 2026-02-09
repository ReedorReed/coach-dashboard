import React from 'react';
import { NavLink } from 'react-router';
import './DashboardNavigation.sass';

function DashboardNavigation() {
    return (
        <nav className="navigation">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `navigation__link ${isActive ? 'navigation__link--active' : ''}`
                }>
                Overview
            </NavLink>
            <NavLink
                to="/leads"
                className={({ isActive }) =>
                    `navigation__link ${isActive ? 'navigation__link--active' : ''}`
                }>
                Leads/Sales insight
            </NavLink>
        </nav>
    );
}

export default DashboardNavigation;
