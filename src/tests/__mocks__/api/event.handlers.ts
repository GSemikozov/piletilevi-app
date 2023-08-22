import { rest } from 'msw';

import { eventRoutesV1 } from '@entities/event/api';
import { eventsMock } from '@tests/__mocks__/data';

import { createMockApiUrl } from './utils';

export const eventHandlers = [
  // Handles a GET /events request
  rest.get(createMockApiUrl(eventRoutesV1.getEvents), (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(eventsMock));
  }),

  // Handles a GET /events/top request
  rest.get(createMockApiUrl(eventRoutesV1.getEventsTop), (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(eventsMock));
  }),

  // Handles a GET /event/:id request
  rest.get(createMockApiUrl(eventRoutesV1.getEvent), (req, res, ctx) => {
    const { id } = req.params;

    const event = eventsMock.find(event => String(event.id) === id);

    if (!event) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(event));
  }),
];
