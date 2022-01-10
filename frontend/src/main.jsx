import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Styles from './Styles';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Login from './components/Login/index';
import Profile from './components/Profile/index';
import Logo from './components/Logo';
import UserContext from './contexts/UserContext';
import Pokemon from './components/Pokemon/index';
import { AnimatePresence } from 'framer-motion';
import Logout from './components/Logout';

const LogoVariants = {
  login: {
    fontSize: 80
  },
  profile: {
    fontSize: 40
  }
}

const App = () => {
  const [user, setUser] = useState();
  const [image, setImage] = useState('');
  const location = useLocation();

  return (
    <UserContext.Provider value={[user, setUser, image, setImage]}>
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/profile" element={<><Profile/><Logout/></>}></Route>
        <Route path="/pokemon" element={<><Pokemon/><Logout/></>}></Route>
      </Routes>
    </AnimatePresence>
    </UserContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Styles/>
    <Logo
    variants={LogoVariants}
    initial="login"
    >PokeFAV</Logo>
      <Router>
        <App/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)