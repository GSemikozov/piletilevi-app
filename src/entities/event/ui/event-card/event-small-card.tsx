import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { EventEntity } from '@entities/event/entity';
import { routesMap } from '@routing/routes';
import { createRoute } from '@shared/utils';

export type EventSmallCardProps = React.PropsWithChildren<{
  event: EventEntity;
  index: number;
}>;

export const EventSmallCard: React.FunctionComponent<EventSmallCardProps> = props => {
  const { event, index } = props;

  const navigate = useNavigate();

  const handleNavigate = (): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigate(createRoute(routesMap.event.path, { id: event.id }));
  };

  return (
    <Root onClick={handleNavigate}>
      <Image src={event.getImage()}>
        <Badge>{index}</Badge>
      </Image>

      <Main>
        <Datetime>
          {event.date} {event.time}
        </Datetime>
        <Title>{event.title}</Title>
      </Main>
    </Root>
  );
};

const Root = styled.div`
  cursor: pointer;
  @media (max-width: 599.95px) {
    display: flex;
    flex-direction: row;
    gap: 12px;
    box-shadow: none;
    background-color: transparent;
  }
`;

const Image = styled.div.attrs<{ src?: string }>(props => ({
  src: props.src,
}))`
  height: 125px;
  background-image: url(${p => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  @media (max-width: 599.95px) {
    width: 160px;
    height: 160px;
    border-radius: 4px;
    flex-shrink: 0;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  position: relative;
  top: 4px;
  padding: 2px 11px 2px 8px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  background-color: #ff0033;
  border-radius: 0 50% 50% 0;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  @media (max-width: 599.95px) {
    flex-direction: column;
    gap: 6px;
    padding: 0;
  }
  & > * {
    width: 100%;
  }
`;

// TODO: create datetime formatter
const Datetime = styled.div`
  color: #4a3991;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 700;
  @media (max-width: 599.95px) {
    font-size: 14px;
    order: 2;
  }
`;

const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 52px;
  margin-top: 8px;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 599.95px) {
    font-size: 16px;
    line-height: 1.3;
    max-height: 42px;
    -webkit-line-clamp: none;
    margin-top: 0;
    order: 1;
  }
`;
