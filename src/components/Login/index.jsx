import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './index.scss';

const linkedinImg =
  'https://carers-network.org.uk/wp-content/uploads/2020/05/Linkedin-Logo-2003%E2%80%932011.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginToApp = async (e) => {
    e.preventDefault();
    console.log({
      name,
      photoUrl,
      email,
      password
    });

    try {
      const userAuth = await auth.signInWithEmailAndPassword(email, password);
      if (userAuth && userAuth.user) {
        const { uid, email, displayName, photoURL } = userAuth.user;

        const userInfo = {
          uid,
          email,
          displayName,
          photoUrl: photoURL
        };

        dispatch(login(userInfo));
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }

    // console.log(e);
    // auth
  };

  const register = async () => {
    if (!name) {
      return alert('Please fill in your Full name');
    }

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (userAuth) {
        await userAuth.user.updateProfile({
          displayName: name,
          photoURL: photoUrl
        });

        const { uid, email } = userAuth.user;

        const userInfo = {
          uid,
          email,
          displayName: name,
          photoUrl: photoUrl
        };

        dispatch(login(userInfo));
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className='login'>
      <div className='img'>
        <img src={linkedinImg} alt='linkedin' />
      </div>

      <form onSubmit={loginToApp}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full name (required if registering)'
        />
        <input
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          type='text'
          placeholder='Profile pic URL (optional)'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <button type='submit'>Sign in</button>

        <p>
          Not a member? <span onClick={register}>Register now</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
