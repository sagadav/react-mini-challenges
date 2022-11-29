import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
