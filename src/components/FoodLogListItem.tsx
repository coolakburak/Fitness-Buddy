import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const FoodLogListItem = ({ item }) => {
  return (
    <View style={styles.foodItemView}>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={styles.foodName}>{item.label}</Text>
        <Text style={styles.ingredients}>
          {item.kcal} cal
        </Text>
      </View>
      
    </View>
  );
};

export default FoodLogListItem;

const styles = StyleSheet.create({
  foodItemView: {
    backgroundColor: "#f6f6f6f6",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ingredients: {
    fontSize: 14,
    color: "dimgray",
  },
});
