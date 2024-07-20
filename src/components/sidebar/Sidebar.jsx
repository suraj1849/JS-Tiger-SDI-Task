import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from '../../assets/icons/dashboard.png';
import AnalyticsIcon from '../../assets/icons/analytics.png';
import RateRequestIcon from '../../assets/icons/rate.png';
import QuoteIcon from '../../assets/icons/quote.png';
import ShipmentsIcon from '../../assets/icons/shipment.png';
import UserListIcon from '../../assets/icons/user.png';
import ArchiveIcon from '../../assets/icons/archive.png';
import HistoryIcon from '../../assets/icons/history.png';
import Arrow from '../../assets/icons/arrow.png';

import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar__wrapper">
        <div className="sidebar__content">
        <ul>
      <li>
        <NavLink to="/" className='reset__a sidebar__item' activeClassName='active'>
          <span><img src={DashboardIcon} alt="Dashboard" /> Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/analytics" className='reset__a sidebar__item' activeClassName='active'>
          <span><img src={AnalyticsIcon} alt="Analytics" /> Analytics</span>
        </NavLink>
      </li>
      <li>
        <div className='sidebar__item'>
          <span><img src={RateRequestIcon} alt="Rate Request" /> Rate Request </span><img src={Arrow} alt="" className="sidebar__dropdown"/>
        </div>
      </li>
      <li>
        <div className='sidebar__item'>
          <span><img src={QuoteIcon} alt="Quote" /> Quote </span><img src={Arrow} alt="" className="sidebar__dropdown"/>
        </div>
      </li>
      <li>
        <NavLink to="/shipments" className='reset__a sidebar__item'>
          <span><img src={ShipmentsIcon} alt="Shipments" /> Shipments</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/user-list" className='reset__a sidebar__item'>
          <span><img src={UserListIcon} alt="User List" /> User List</span>
        </NavLink>
      </li>
      <li>
        <div className='sidebar__item'>
          <span><img src={ArchiveIcon} alt="Archive" /> Archive</span><img src={Arrow} alt="" className="sidebar__dropdown"/>
        </div>
      </li>
      <li>
        <NavLink to="/history" className='reset__a sidebar__item'>
          <span><img src={HistoryIcon} alt="History" /> History</span>
        </NavLink>
      </li>
    </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
