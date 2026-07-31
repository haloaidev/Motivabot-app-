import Home from './pages/Home';
import Goals from './pages/Goals';
import Moods from './pages/Moods';
import Habits from './pages/Habits';
import Settings from './pages/Settings';

export const routes = [
  { path: '/', element: Home },
  { path: '/home', element: Home },
  { path: '/goals', element: Goals },
  { path: '/moods', element: Moods },
  { path: '/habits', element: Habits },
  { path: '/settings', element: Settings },
];

export default routes;
