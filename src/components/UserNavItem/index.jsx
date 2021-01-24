import React, { useState, useRef, useEffect } from 'react';
import { ArrowDropDown } from '@material-ui/icons';

import './index.scss';
import { handleClickOutside, defaultImg } from '../utils';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';

const defaultAvatarSrc = defaultImg;

const DropDown = (props) => {
  const { wrapperRef } = props;
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    console.log('hiih');
    // handleClickOutside(wrapperRef, e, () => {});
  };

  return (
    <ul className='user-dropdown' ref={wrapperRef}>
      <button>View Profile</button>
      <li className='user-group'>Account</li>
      <li>
        <span>Setting & Privacy</span>
      </li>
      <li>
        <span>Help</span>
      </li>
      <li>
        <span>Language</span>
      </li>
      <div className='divider'></div>
      <li className='user-group'>Manage</li>
      <li>
        <span>Post & Activity</span>
      </li>
      <li>
        <span>Job Posting Account</span>
      </li>
      <div className='divider'></div>
      <li
        onClick={async () => {
          await auth.signOut();
        }}
      >
        <span>Sign out</span>
      </li>
    </ul>
  );
};

const UserNavItem = (props) => {
  const { photoUrl = '' } = props;
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleShowOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleShowOutsideClick);
    };
  }, []);

  const handleShowOutsideClick = (e) => {
    if (wrapperRef && wrapperRef.current) {
      handleClickOutside(wrapperRef, e, () => {
        setDisplayDropdown(false);
      });
    }
  };

  const clickOutside = () => {
    // handleClickOutside;
  };

  return (
    <div className='user-nav'>
      {/* <img src={DefaultAvatar} alt="avatar"/> */}
      <img src={photoUrl ? photoUrl : defaultAvatarSrc} alt='avatar' />
      <div
        className='content'
        onClick={() => setDisplayDropdown((prevState) => !prevState)}
      >
        <span>Me</span>
        <ArrowDropDown />

        {displayDropdown && <DropDown wrapperRef={wrapperRef} />}
      </div>
    </div>
  );
};

export default UserNavItem;
