import { styled } from 'styled-components';

type SectionProps = React.PropsWithChildren<{
  title: string;
}>;

export const Section: React.FunctionComponent<SectionProps> = props => {
  const { title, children } = props;

  return (
    <Root>
      <Title>{title}</Title>
      <Main>{children}</Main>
    </Root>
  );
};

const Root = styled.div`
  margin: 0 60px;

  @media (max-width: 599.95px) {
    margin: 0 16px;
  }
`;

const Title = styled.h1`
  color: #333;
  font-family: 'Blacker Pro Display';
  font-size: 32px;

  @media (max-width: 599.95px) {
    font-size: 20px;
  }
`;

const Main = styled.div`
  margin-top: 32px;

  @media (max-width: 599.95px) {
    margin-top: 16px;
  }
`;
