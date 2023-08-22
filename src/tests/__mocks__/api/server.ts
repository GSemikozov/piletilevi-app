import { setupServer } from 'msw/node';

import { eventHandlers } from './event.handlers';

export const mockServer = setupServer(...eventHandlers);
