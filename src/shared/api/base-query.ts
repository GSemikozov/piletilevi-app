import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { API_URL } from '@config/environment';

export const fetchAppBaseQuery = fetchBaseQuery({ baseUrl: API_URL });
