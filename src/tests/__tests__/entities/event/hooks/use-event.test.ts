import { waitFor } from '@testing-library/react';
import { QueryStatus } from '@reduxjs/toolkit/query';

import { EventEntityList } from '@entities/event/entity';
import { useEvents } from '@entities/event/hooks';
import { mockServer } from '@tests/__mocks__/api';
import { eventsMock } from '@tests/__mocks__/data';
import { renderHookWithProvider } from '@tests/test-utils/redux';

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

describe('useEvent', () => {
  it('success: fetch and receive events', async () => {
    const { result } = renderHookWithProvider(() => useEvents());

    expect(result.current).toMatchObject({
      events: [],
      count: 0,

      status: QueryStatus.pending,
      endpointName: 'getEvents',
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const { entities: events, count } = new EventEntityList(eventsMock);

    expect(result.current).toMatchObject({
      events,
      count,

      status: QueryStatus.fulfilled,
      endpointName: 'getEvents',
      isLoading: false,
      isSuccess: true,
      isError: false,
      isFetching: false,
    });
  });
});
