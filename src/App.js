import { useEffect } from 'react';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Core from './components/Core';
import Login from './components/Login';

import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { auth } from './firebase';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        console.log(userAuth);
        const { uid, email, displayName, photoURL } = userAuth;
        const userInfo = {
          uid,
          email,
          displayName,
          photoUrl: photoURL
        };

        dispatch(login(userInfo));
      } else {
        // logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className='App'>
      <Header />

      {user.user ? (
        <main>
          <LeftBar />
          <Core />
          <RightBar />
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
