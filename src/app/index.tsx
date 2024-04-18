import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { gql, useQuery } from "@apollo/client";
import dayjs from "dayjs";
import FoodLogListItem from "../components/FoodLogListItem";

const query = gql`
  query MyQuery($date: Date!, $user_id: String!) {
    foodLogsForDate(date: $date, user_id: $user_id) {
      created_at
      food_id
      user_id
      label
      kcal
      id
    }
  }
`;

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
  const user_id = "Burak";
  const { data, loading, error } = useQuery(query, {
    variables: {
      // date: new Date().toISOString().split('T')[0],
      date: dayjs().format("YYYY-MM-DD"),
      user_id,
    },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: Failed to fetch data</Text>;
  }

  

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
        data={data.foodLogsForDate}
        renderItem={({ item }) => <FoodLogListItem item={item} />}
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
