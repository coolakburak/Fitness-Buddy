import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://salemlakes.stepzen.net/api/reeling-warthog/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      " apikey salemlakes::stepzen.net+1000::ac567b0aafed989922432193b91ee968a63c28a695c0799ee92354008d74b918",
  },
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
