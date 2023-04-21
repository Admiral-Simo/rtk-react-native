import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const randomApi = createApi({
  reducerPath: 'randomApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.randomnumberapi.com/api/v1.0/' }),
  endpoints: (builder) => ({
    getRandomBetween: builder.query({
      query: ({min, max, count}) => `random?min=${min}&max=${max}&count=${count}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRandomBetweenQuery } = randomApi