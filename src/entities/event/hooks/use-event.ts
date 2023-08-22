import { useGetEventQuery } from '@entities/event/api';
import { EventEntity } from '@entities/event/entity';
import { useEntity } from '@shared/lib/entity';

type QueryParameters = Parameters<typeof useGetEventQuery>;

type QueryResult = ReturnType<typeof useGetEventQuery> & {
  event: EventEntity;
};

export const useEvent = (...parameters: QueryParameters): QueryResult => {
  const queryResult = useGetEventQuery(...parameters);

  return useEntity(
    () => ({
      ...queryResult,
      event: new EventEntity(queryResult.data),
    }),

    [queryResult],
  );
};
