import { Switch, Route, Router, Redirect, useLocation } from 'react-router-dom';
import * as page from '@pages/index';
import { useEffect } from 'react';

const route_list = [
  {
    path: '/',
    component: page.CharacterList,
  },
  {
    path: '/character/:name',
    component: page.CharacterDetail,
  },
  {
    path: '/search/:name',
    component: page.SearchResult,
  },
];

// export const ScrollToTop = () => {
//   const pathname = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

export default function AppRouter() {
  return (
    <>
      <Switch>
        {route_list.map((val, key) => (
          <Route exact {...val} key={key} />
        ))}
        <Redirect to="/" />
      </Switch>
    </>
  );
}
