import { styled } from 'styled-components';

type LayoutProps = React.PropsWithChildren<{
  headerSlot?: React.ReactNode;
}>;

export const Layout: React.FunctionComponent<LayoutProps> = props => {
  const { headerSlot, children } = props;

  return (
    <Root>
      {headerSlot ? <Header>{headerSlot}</Header> : null}

      <Main>{children}</Main>
    </Root>
  );
};

const Root = styled.div``;

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
`;

const Main = styled.div`
  padding: 46px 0;

  @media (max-width: 599.95px) {
    padding: 16px 0;
  }
`;
