import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import FoodListItem from "../components/FoodListItem";

const foodItems = [
  {
    food: {
      label: "Pizza",
      brand: "Dominos",
      nutrients: { ENERC_KCAL: 100 },
    },
  },

  {
    food: {
      label: "Pizza",
      brand: "Dominos",
      nutrients: { ENERC_KCAL: 100 },
    },
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Calories</Text>
        <Text>2100 - 460 = 1640</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Today's food</Text>
        <Link href="/search" asChild>
          <Button title="ADD FOOD" />
        </Link>
      </View>

      <FlatList
        contentContainerStyle={{ gap: 5 }}
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    gap: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    color: "dimgray",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
