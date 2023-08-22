export namespace EventApiV1 {
  export type Event = {
    id: number;
    title: string;
    image: string;
    date: string;
    location: string;

    time?: string;
  };

  export type EventResponse = Event;

  export type EventsResponse = Event[];

  export type EventsTopResponse = EventsResponse;
}
