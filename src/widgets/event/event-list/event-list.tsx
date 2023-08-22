import { styled, css } from 'styled-components';

import { Loader } from '@shared/ui';

type EventListProps = React.PropsWithChildren<{
  loading?: boolean;
}>;

export const EventList: React.FunctionComponent<EventListProps> = props => {
  const { loading, children } = props;

  if (loading) {
    return (
      <Root fluid>
        <Loader size={50} />
      </Root>
    );
  }

  return <Root>{children}</Root>;
};

const Root = styled.div<{ fluid?: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
  gap: 32px 16px;

  ${p =>
    p.fluid &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    `}

  @media (max-width:599.95px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
