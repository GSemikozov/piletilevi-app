import { EntityList } from '@shared/lib/entity';

import { EventEntity } from './event.entity';

import type { Raw } from './event.entity';

export class EventEntityList extends EntityList<EventEntity> {
  constructor(items: Raw[] | null, count?: number | null) {
    super(EventEntity, items, count);
  }
}
