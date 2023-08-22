/* eslint-disable */
const fetchMock = require('jest-fetch-mock');

fetchMock.enableMocks();

jest.mock('@config/environment', () => ({
  API_URL: 'API',
  IMAGE_URL: 'IMAGE',
}));
