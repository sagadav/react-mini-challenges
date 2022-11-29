import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to={'/test'}>Counter page</Link>
      <Link to={'/comments'}>Comments</Link>
    </div>
  );
}

export default HomePage;
