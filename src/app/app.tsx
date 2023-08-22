import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from '@routing/routes';

import { withProviders } from './providers';

import '@shared/lib/i18n';

export type AppProps = unknown;

const BaseApp = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        {routes.map(([id, route]) => (
          <Route
            key={id}
            index={route.index}
            path={route.path}
            element={
              <route.layout>
                <route.element />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export const App = withProviders(BaseApp);
