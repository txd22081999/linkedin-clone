import React from 'react';
import './index.scss';

const linkedinImg =
  'https://carers-network.org.uk/wp-content/uploads/2020/05/Linkedin-Logo-2003%E2%80%932011.png';

const Login = () => {
  return (
    <div className='login'>
      <div className='img'>
        <img src={linkedinImg} alt='linkedin' />
      </div>

      <form>
        <input type='text' placeholder='Full name (required if registering)' />
        <input type='text' placeholder='Profile pic URL (optional)' />
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
