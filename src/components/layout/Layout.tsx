import { PAGES_MAP } from '@/router/paths';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div>
        <Link to={PAGES_MAP.home.path}>Home</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
