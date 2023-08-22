import { waitFor } from '@testing-library/react';
import { QueryStatus } from '@reduxjs/toolkit/query';

import { EventEntity } from '@entities/event/entity';
import { useEvent } from '@entities/event/hooks';
import { mockServer } from '@tests/__mocks__/api';
import { eventsMock } from '@tests/__mocks__/data';
import { renderHookWithProvider } from '@tests/test-utils/redux';
import { EventApiV1 } from '@entities/event/api';

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

describe('useEventsTop', () => {
  it('success: fetch and receive event by id', async () => {
    const eventMockId = 1;
    const eventMock = eventsMock.find(event => event.id === 1) as EventApiV1.Event;

    const { result } = renderHookWithProvider(() => useEvent(eventMockId));

    expect(result.current).toMatchObject({
      event: new EventEntity(null),

      status: QueryStatus.pending,
      endpointName: 'getEvent',
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current).toMatchObject({
      event: new EventEntity(eventMock),

      status: QueryStatus.fulfilled,
      endpointName: 'getEvent',
      isLoading: false,
      isSuccess: true,
      isError: false,
      isFetching: false,
    });
  });

  it('failure: fetch and receive 404', async () => {
    const eventMockId = 10;

    const { result } = renderHookWithProvider(() => useEvent(eventMockId));

    expect(result.current).toMatchObject({
      event: new EventEntity(null),

      status: QueryStatus.pending,
      endpointName: 'getEvent',
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current).toMatchObject({
      event: new EventEntity(null),

      status: QueryStatus.rejected,
      endpointName: 'getEvent',
      isLoading: false,
      isSuccess: false,
      isError: true,
      isFetching: false,
    });
  });
});
