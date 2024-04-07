import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";

const FoodItems = [
  { label: "Pizza", cal: 745, brand: "Domino's" },
  { label: "Sandwich", cal: 1750, brand: "Subway" },
  { label: "Burger", cal: 1200, brand: "McDonald's" },
  { label: "Pasta", cal: 850, brand: "Olive Garden" },
];

export default function App() {
  const [search, setSearch] = useState("");
  const performSearch = () => {
    alert(`Searching for ${search}`);
    setSearch("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search for a Food..."
        style={styles.searchBar}
      />

      {search && <Button title="search" onPress={performSearch} />}

      <FlatList
        data={FoodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
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
