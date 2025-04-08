import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import DataPage from './DataPage';

const routes = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout routes={routes} />}>
          {routes.map((route) => (
            <Route
              key={route}
              path={route}
              element={<DataPage type={route} />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
