import React from 'react';
import { AddAPhoto, Bookmark } from '@material-ui/icons';
import './index.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const mockAvatarImg =
  'https://businesstech.co.za/news/wp-content/uploads/2015/03/Male-ideal-beauty.jpg';
const mockBackgroundImg =
  'https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-03.jpg';

const PremiumIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    data-supported-dps='24x24'
    className='mercado-match'
    width='24'
    height='24'
    focusable='false'
  >
    <path
      d='M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z'
      fill='#f8c77e'
    ></path>
    <path
      d='M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z'
      fill='#e7a33e'
    ></path>
  </svg>
);

const LeftBar = () => {
  const user = useSelector(selectUser);

  const { displayName: name = '', photoUrl = '' } = user;

  return (
    <div className='left-bar'>
      <div className='user-info'>
        <div className='card'>
          <div className='background'>
            <img src={mockBackgroundImg} alt='background' />
          </div>
          <div className='avatar'>
            <img src={photoUrl || mockAvatarImg} alt='avatar' />
            {/* <AddAPhoto /> */}
          </div>

          <div className='info'>
            <span className='name'>{name}</span>
            <span className='desc'>Director at JD.co</span>
          </div>

          <div className='divider'></div>

          <div className='number-info'>
            <span className='text'>Who viewed your profile</span>
            <span className='number'>1546</span>
            <span className='text'>Views of your post</span>
            <span className='number'>853</span>
          </div>

          <div className='divider'></div>

          <div className='further-info'>
            <p>Access exclusive tools & insight</p>
            <div className='premium'>
              <PremiumIcon />
              <span>Try Premium Free</span>
            </div>
          </div>

          <div className='divider'></div>

          <div className='my-item'>
            <Bookmark />
            <span>My items</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
