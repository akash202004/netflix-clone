import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import { Helmet } from "react-helmet";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        // logged out
        dispatch(logout())
      }
    })

    return unsubscribe;;
  }, [dispatch])


  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Netflix</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <BrowserRouter>
        {!user ? <LoginScreen /> : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
