import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ROUTER } from './lib/router';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={ROUTER} />
    </Suspense>
  );
};

export default App;
