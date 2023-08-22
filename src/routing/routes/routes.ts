import { EmptyLayout, BaseLayout } from '@widgets/shared';
import { IndexPage } from '@pages';
import { NotFoundPage } from '@pages/not-found';
import { EventPage } from '@pages/event';

import type { RouteProps as BaseRouteProps } from 'react-router-dom';

export type RouteProps = Omit<BaseRouteProps, 'element'> & {
  element: () => React.ReactNode;
  layout: (props: React.PropsWithChildren) => React.ReactNode;
};

export const routesMap: Record<string, RouteProps> = {
  index: {
    index: true,
    path: '/',
    element: IndexPage,
    layout: BaseLayout,
  },

  event: {
    path: '/events/:id',
    element: EventPage,
    layout: BaseLayout,
  },

  notFound: {
    path: '*',
    element: NotFoundPage,
    layout: EmptyLayout,
  },
};

export const routes = Object.entries(routesMap);
