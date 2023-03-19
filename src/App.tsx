import React from 'react';
import { NotFound, PaginationPage } from './components';
import { Routes, Route } from 'react-router-dom';

function App () {
  return (
    <Routes>
      <Route path='/' element={<PaginationPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
