import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoNewsHeaders = {
  "x-rapidapi-key": "ff317fb7bbmshf3c97b44b26a03ep1d1d60jsn73ca720371ab",
  "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
};

const baseUrl = 'https://real-time-news-data.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => createRequest(`/search?q=${newsCategory}&limit=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
