import { createApi } from '@reduxjs/toolkit/query/react';

import { createRoute } from '@shared/utils';
import { fetchAppBaseQuery } from '@shared/api';

import { eventRoutesV1 } from './v1';

import type { EventApiV1 } from './v1/types';

export const eventService = createApi({
  reducerPath: 'eventService',
  baseQuery: fetchAppBaseQuery,
  endpoints: builder => ({
    getEvents: builder.query<EventApiV1.Event, void>({
      query: () => createRoute(eventRoutesV1.getEvents),
    }),

    getEventsTop: builder.query<EventApiV1.Event, void>({
      query: () => createRoute(eventRoutesV1.getEventsTop),
    }),

    getEvent: builder.query<EventApiV1.Event, number>({
      query: id => createRoute(eventRoutesV1.getEvent, { id }),
    }),
  }),
});

export const { useGetEventsQuery, useGetEventsTopQuery, useGetEventQuery } = eventService;
