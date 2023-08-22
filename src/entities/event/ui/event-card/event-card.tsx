import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { EventEntity } from '@entities/event/entity';

export type EventCardProps = React.PropsWithChildren<{
  event: EventEntity;

  actionsSlot?: React.ReactNode;
}>;

export const EventCard: React.FunctionComponent<EventCardProps> = props => {
  const { event, actionsSlot } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <Root onClick={handleNavigate}>
      <Image src={event.getImage()}>{actionsSlot ? <Actions>{actionsSlot}</Actions> : null}</Image>

      <Main>
        <Datetime>
          {event.date} {event.time}
        </Datetime>
        <Title>{event.title}</Title>
        <Location>{event.location}</Location>
      </Main>
    </Root>
  );
};

const Root = styled.div`
  background-color: #fff;

  border: 1px solid #f0f0f2;
  box-shadow: 0 4px 15px 0 rgba(28, 0, 99, 0.03);
  border-radius: 8px;

  transition: box-shadow 300ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 15px 0 rgba(28, 0, 99, 0.1);
  }

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
  height: 165px;
  background-image: url(${p => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 8px 8px 0 0;

  @media (max-width: 599.95px) {
    width: 90px;
    height: 90px;
    border-radius: 4px;
    flex-shrink: 0;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 599.95px) {
    display: none;
  }
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
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;

  @media (max-width: 599.95px) {
    font-size: 14px;
    order: 2;
  }
`;

const Title = styled.div`
  max-height: 52px;
  margin-top: 8px;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 599.95px) {
    font-size: 16px;
    line-height: 1.3;
    max-height: 42px;
    -webkit-line-clamp: none;
    margin-top: 0;
    order: 1;
  }
`;

const Location = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;

  @media (max-width: 599.95px) {
    font-size: 14px;
    color: #5d5e60;
    margin-top: 0;
    order: 3;
  }
`;
