import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useEvent } from '@entities/event/hooks';

export const EventPage = () => {
  const { id } = useParams();

  const eventId = id ? Number(id) : 0;

  const event = useEvent(eventId);

  return (
    <Box sx={{ px: 8 }}>
      <Typography variant='h3'>Event ID-{id}</Typography>
      <Box mt={4} sx={{ wordBreak: 'break-word' }}>
        Event data: {JSON.stringify(event)}
      </Box>
    </Box>
  );
};
