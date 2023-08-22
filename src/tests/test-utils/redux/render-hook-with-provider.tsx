import type { PreloadedState } from '@reduxjs/toolkit';

import React from 'react';
import { renderHook } from '@testing-library/react';
import { queries } from '@testing-library/dom';
import { Provider } from 'react-redux';

import { setupStore } from '@app/store';

import type { RenderHookOptions, Queries } from '@testing-library/react';
import type { AppStore, RootState } from '@app/store';

type ExtendedRenderHookOptions = {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
};

export const renderHookWithProvider = <
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
>(
  render: (initiapProps: Props) => Result,
  options: RenderHookOptions<Props, Q, Container, BaseElement> & ExtendedRenderHookOptions = {},
) => {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    wrapper: Wrapper,
    ...renderHookOptions
  } = options;

  const BaseWrapper = (props: React.PropsWithChildren<any>): JSX.Element => {
    const { children } = props;

    if (typeof Wrapper !== 'undefined') {
      return (
        <Provider store={store}>
          <Wrapper>{children}</Wrapper>
        </Provider>
      );
    }

    return <Provider store={store}>{children}</Provider>;
  };

  return renderHook(render, { wrapper: BaseWrapper, ...renderHookOptions });
};
