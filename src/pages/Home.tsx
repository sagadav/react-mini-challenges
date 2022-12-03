import { Link } from 'react-router-dom';
import { PAGES_MAP } from '@/router/paths';

const NAV_PAGES = [PAGES_MAP.comments, PAGES_MAP.productCards];

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {NAV_PAGES.map((page) => (
        <Link key={page.path} to={page.path}>
          {page.navLabel ?? page.path}
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
