import { useEffect, useState } from 'react';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

//현재 페이지가 뭔지

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
