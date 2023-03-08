import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
