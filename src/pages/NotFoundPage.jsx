import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main>
      <div>
        <h1>Sorry! Page not found</h1>
        <Link to="/">Back to home page</Link>
      </div>
    </main>
  );
}
