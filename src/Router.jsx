import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContext from './AuthContext';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/404';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Router = () => {
  const [isLogedIn, setisLogedIn] = useState(false);

  const contextValue = {
    isLogedIn,
    login,
    logout,
  };

  function login() {
    localStorage.getItem('token');
    setisLogedIn(true);
  }

  function logout() {
    setisLogedIn(false);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<Login login={login} />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default Router;