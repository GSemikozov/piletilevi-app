import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';

import { EventList, TopEventsSection } from '@widgets/event';
import { Section } from '@widgets/shared';
import { EventMediumCard, EventSmallCard } from '@entities/event/ui';
import { useEvents, useEventsTop } from '@entities/event/hooks';
import { HeartOutlinedIcon } from '@shared/ui-kit/icons';

export const IndexPage = () => {
  const { t } = useTranslation('common');

  const { eventsTop, isLoading: isTopEventsLoading } = useEventsTop();
  const { events, isLoading: isEventsLoading } = useEvents();

  return (
    <>
      <TopEventsSection loading={isTopEventsLoading}>
        {eventsTop.map((event, idx) => (
          <EventSmallCard key={event.id} index={idx + 1} event={event} />
        ))}
      </TopEventsSection>
      <Section title={t('events.title')}>
        <EventList loading={isEventsLoading}>
          {events.map(event => (
            <EventMediumCard
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
