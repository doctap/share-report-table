import React from 'react';
import styles from './App.module.scss';
import { useAppDispatch, useAppSelector } from './redux/hooks/redux';
import { showSlice } from './redux/reducers/ExampleSlice';
import logo from './logo.svg';

function App () {
  const { plusOne, showHideWindow } = showSlice.actions;
  const { counter, isShow } = useAppSelector(st => st.showSlice);
  const dispatch = useAppDispatch();

  const showReact = () => { dispatch(showHideWindow(!isShow)); };
  const setCount = () => { dispatch(plusOne(counter + 1)); };

  return (
    <div className={styles.App}>

      <button onClick={showReact} className={styles.Click}>star</button>
      <img src={logo} className={styles.AppLogo} alt="logo" />

      {
        isShow
          ? <><h1>Happy hacking!{counter}</h1> <button onClick={setCount}>count</button></>
          : null
      }

    </div>
  );
}

export default App;
