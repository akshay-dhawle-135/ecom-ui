import { Outlet, Link } from 'react-router-dom';

export default function Layout({ routes }) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: 200, background: '#f4f4f4', padding: 20 }}>
        <h3>Pages</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {routes.map((r) => (
            <li key={r} style={{ margin: '10px 0' }}>
              <Link to={`/${r}`}>{r}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main style={{ flex: 1, padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
