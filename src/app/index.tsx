import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const query = gql`
  query search($ingr: String) {
    search(ingr: $ingr) {
      text
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`;

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
    setSearch("");
  };

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search for a Food..."
        style={styles.searchBar}
      />

      {search && <Button title="search" onPress={performSearch} />}
      {loading && <ActivityIndicator size="large" color="royalblue" />}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => <FoodListItem item={item} />}
        ListEmptyComponent={<Text>Search a food for results </Text>}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    padding: 10,
  },
  searchBar: {
    backgroundColor: "#f2f2f2f2",
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
});
