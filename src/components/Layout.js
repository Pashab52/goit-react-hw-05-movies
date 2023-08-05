import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout