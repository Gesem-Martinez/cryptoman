import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-rapidapi-key": "ff317fb7bbmshf3c97b44b26a03ep1d1d60jsn73ca720371ab",
  "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
};

const baseUrl = "https://real-time-news-data.p.rapidapi.com";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "ff317fb7bbmshf3c97b44b26a03ep1d1d60jsn73ca720371ab",
      );
      headers.set("x-rapidapi-host", "real-time-news-data.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => ({
        url: "/search",
        params: {
          query: newsCategory,
          limit: count,
        },
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
