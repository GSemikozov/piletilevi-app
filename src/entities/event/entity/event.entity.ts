import { BaseEntity, Entity } from '@shared/lib/entity';
import { getImageUrl } from '@shared/utils';

import type { EventApiV1 } from '@entities/event/api';

export type Raw = EventApiV1.Event | null;

@Entity('EventEntity')
export class EventEntity extends BaseEntity {
  id: number;
  title: string;
  image: string;
  date: string;
  location: string;

  time?: string;

  constructor(raw: Raw) {
    super(raw);

    this.id = raw?.id ?? 0;
    this.title = raw?.title ?? '';
    this.image = raw?.image ?? '';
    this.date = raw?.date ?? '';
    this.location = raw?.location ?? '';

    this.time = raw?.time ?? '';
  }

  getImage() {
    return getImageUrl(this.image);
  }
}
