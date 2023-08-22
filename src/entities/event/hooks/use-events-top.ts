import { useGetEventsTopQuery } from '@entities/event/api';
import { EventEntity, EventEntityList } from '@entities/event/entity';
import { useEntity } from '@shared/lib/entity';

type QueryParameters = Parameters<typeof useGetEventsTopQuery>;

type QueryResult = ReturnType<typeof useGetEventsTopQuery> & {
  eventsTop: EventEntity[];
  count: number;
};

export const useEventsTop = (...parameters: QueryParameters): QueryResult => {
  const queryResult = useGetEventsTopQuery(...parameters);

  return useEntity(() => {
    const { entities, count } = new EventEntityList(queryResult.data);

    return {
      ...queryResult,
      eventsTop: entities,
      count,
    };
  }, [queryResult]);
};
