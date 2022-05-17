import React from 'react';
import { useHistory } from 'react-router-dom';
// import styles from './Header.module.css';
const Header = () => {
  const history = useHistory();
  const movePage = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={movePage}>BACK</button>
    </div>
  );
};

export default Header;
