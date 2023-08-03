import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

const Layout = () => {
  return (
    <>
      <header className='header'>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout