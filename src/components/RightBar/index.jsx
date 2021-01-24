import React from 'react';
import './index.scss';

const InfoIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    data-supported-dps='16x16'
    fill='currentColor'
    className='mercado-match'
    width='16'
    height='16'
    focusable='false'
  >
    <path d='M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z'></path>
  </svg>
);

const NEWS_DATA = [
  {
    id: 1,
    title: 'What jobs could look like in 2024',
    time: '1h',
    readers: '1200'
  },
  {
    id: 2,
    title: `Android's consistency crisis`,
    time: '5h',
    readers: '3400'
  },
  {
    id: 3,
    title: `Apple Watch can help in the fight agains COVID-19`,
    time: '12h',
    readers: '5000'
  },
  {
    id: 4,
    title: `Employee choice is critical to the WFH future`,
    time: '1d',
    readers: '670'
  },
  {
    id: 5,
    title: `Adobe lays Flash to rest`,
    time: '1d',
    readers: '3300'
  }
];

const NewsItem = ({ title, time, readers }) => (
  <li>
    <div className='dot'></div>

    <div className='news-text'>
      <span className='news-title'>{title}</span>
      <p className='news-content'>
        {time} ago • {readers} readers
      </p>
    </div>
  </li>
);

const RightBar = () => {
  return (
    <div className='right-bar'>
      <div className='news'>
        <div className='news-header'>
          <h5>Linkedin News</h5>
          <InfoIcon />
        </div>

        <ul>
          {NEWS_DATA.map(({ id, title, time, readers }) => (
            <NewsItem key={id} title={title} time={time} readers={readers} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
