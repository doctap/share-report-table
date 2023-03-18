import React from 'react';
import styles from './App.module.scss';
import { PaginationPage } from './components';

function App () {
  return (
    <div className={styles.App}>
      <PaginationPage />
    </div>
  );
}

export default App;
