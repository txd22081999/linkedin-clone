import React, { useState } from 'react';
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Sms,
  Notifications
} from '@material-ui/icons';

import Logo from '../../assets/linkedin-logo.png';
import './index.scss';
import NavItem from '../NavItem';
import UserNavItem from '../UserNavItem';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Header = () => {
  const [active, setActive] = useState([true, false, false, false, false]);
  const user = useSelector(selectUser);
  console.log(user);
  // const { photoUrl = '' } = user;

  const handleClick = (index) => {
    let newActive = [false, false, false, false, false];
    newActive[index] = true;
    setActive(newActive);
  };

  return (
    <div className='header nav-header'>
      <div className='left'>
        <img src={Logo} alt='logo' />

        <div className='search'>
          <Search />
          <input type='text' placeholder='Search' />
        </div>
      </div>

      <div className='right'>
        <nav>
          <ul className='nav'>
            <li>
              <NavItem
                active={active[0]}
                Icon={<Home />}
                name='home'
                onClick={() => handleClick(0)}
              />
            </li>
            <li>
              <NavItem
                active={active[1]}
                Icon={<SupervisorAccount />}
                name='my network'
                onClick={() => handleClick(1)}
              />
            </li>
            <li>
              <NavItem
                active={active[2]}
                Icon={<BusinessCenter />}
                name='jobs'
                onClick={() => handleClick(2)}
              />
            </li>
            <li>
              <NavItem
                active={active[3]}
                Icon={<Sms />}
                name='messaging'
                onClick={() => handleClick(3)}
                notif={2}
              />
            </li>
            <li>
              <NavItem
                active={active[4]}
                Icon={<Notifications />}
                name='notifications'
                onClick={() => handleClick(4)}
                notif={5}
              />
            </li>
            <li>
              <UserNavItem photoUrl={user && user.photoUrl} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
