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

    </div>
  );
}

export default App;
