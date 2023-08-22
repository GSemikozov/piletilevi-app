import { useGetEventsQuery } from '@entities/event/api';
import { EventEntity, EventEntityList } from '@entities/event/entity';
import { useEntity } from '@shared/lib/entity';

type QueryParameters = Parameters<typeof useGetEventsQuery>;

type QueryResult = ReturnType<typeof useGetEventsQuery> & {
  events: EventEntity[];
  count: number;
};

export const useEvents = (...parameters: QueryParameters): QueryResult => {
  const queryResult = useGetEventsQuery(...parameters);

  return useEntity(() => {
    const { entities, count } = new EventEntityList(queryResult.data);

    return {
      ...queryResult,
      events: entities,
      count,
    };
  }, [queryResult]);
};
