import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import routes from './routes/lazyloading';
import { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/dashboard/Dashboard';

const isAdminLoggedIn = () => {
  const accessToken = localStorage.getItem('token');
  return accessToken ? true : false;
};

const ProtectedAdminRoute = ({ element, ...rest }) => {
  return isAdminLoggedIn() ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} index />
        {routes.map((route, index) => {
          const { path, component: Component } = route;
          return (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
              
              <Route
          path="/dashboard"
          element={<ProtectedAdminRoute element={<Dashboard />} />}
        />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
