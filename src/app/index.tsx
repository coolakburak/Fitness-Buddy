import { StyleSheet, Text, View } from "react-native";
import FoodListItem from "../components/FoodListItem";
export default function App() {
  return (
    <View style={styles.container}>
      <FoodListItem item={{ label: "Pizza", cal: 745, brand: "Domino's" }} />
      <FoodListItem item={{ label: "Sandwich", cal: 1750, brand: "Subway" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    gap: 5,
  },
});
