import { styled } from 'styled-components';

type EmptyLayoutProps = React.PropsWithChildren;

export const EmptyLayout: React.FunctionComponent<EmptyLayoutProps> = props => {
  const { children } = props;

  return <Root>{children}</Root>;
};

const Root = styled.div``;
