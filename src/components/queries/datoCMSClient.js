// src/datoCMSClient.js
import { GraphQLClient } from 'graphql-request';

const datoCMSClient = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DATO_CMS_API_TOKEN}`,
  },
});

export default datoCMSClient;
