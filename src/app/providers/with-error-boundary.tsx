import { ErrorBoundary } from '@shared/ui';

import type { AppProps } from '@app';
import type { WrapedComponent } from './types';

export const withErrorBoundary = (component: WrapedComponent<AppProps>) => (props: AppProps) => {
  return <ErrorBoundary>{component(props)}</ErrorBoundary>;
};
