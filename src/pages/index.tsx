import { useTranslation } from 'react-i18next';
import { Box, IconButton } from '@mui/material';

import { EventList } from '@widgets/event';
import { Section } from '@widgets/shared';
import { EventCard, TopEventCard } from '@entities/event/ui';
import { useEvents, useEventsTop } from '@entities/event/hooks';
import { TopEvents } from '@widgets/event/top-events/top-events';
import { HeartOutlinedIcon } from '@shared/ui-kit/icons';
// import { spliceIntoChunks } from '@shared/helpers';

export const IndexPage = () => {
  const { t } = useTranslation('common');

  const { eventsTop, isLoading: isTopEventsLoading } = useEventsTop();
  const { events, isLoading } = useEvents();

  // TODO: prepare slides for carousel
  // const splicedEventsTop = spliceIntoChunks(eventsTop, 5);

  return (
    <>
      <TopEvents title={t('events.top.title')} loading={isTopEventsLoading}>
        <TopEventsRow events={eventsTop} />
      </TopEvents>
      <Section title={t('events.title')}>
        <EventList loading={isLoading}>
          {events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              actionsSlot={
                <IconButton sx={{ color: '#fff' }}>
                  <HeartOutlinedIcon />
                </IconButton>
              }
            />
          ))}
        </EventList>
      </Section>
    </>
  );
};

// TODO: use as a slide for carousel
const TopEventsRow: React.FunctionComponent<{ events: any[] }> = ({ events }) => (
  <Box
    sx={theme => ({
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(240px, 1fr))',
      gap: '30px',
      overflowX: 'auto',
      [theme.breakpoints.down('sm')]: {
        gap: '8px',
        gridTemplateColumns: 'repeat(5, minmax(160px, 1fr))',
      },
    })}
  >
    {events.map((event, i) => {
      const index = i + 1;
      return <TopEventCard key={event.id} index={index} event={event} />;
    })}
  </Box>
);
