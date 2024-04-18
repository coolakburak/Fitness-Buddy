import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "expo-router";

const mutation = gql`
  mutation MyMutation(
    $food_id: String!
    $kcal: Int!
    $label: String!
    $user_id: String!
  ) {
    insertFood_log(
      food_id: $food_id
      kcal: $kcal
      label: $label
      user_id: $user_id
    ) {
      created_at
      food_id
      id
      kcal
      label
      user_id
    }
  }
`;
const FoodListItem = ({ item }) => {
  const [logFood] = useMutation(mutation, {
    refetchQueries: ["MyQuery"],
  });
  const router = useRouter();
  const onPlusPressed = async () => {
    await logFood({
      variables: {
        food_id: item.food.foodId,
        kcal: item.food.nutrients.ENERC_KCAL,
        label: item.food.label,
        user_id: "Burak",
      },
    });
    router.back();
  };

  return (
    <View style={styles.foodItemView}>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={styles.foodName}>{item.food.label}</Text>
        <Text style={styles.ingredients}>
          {item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}
        </Text>
      </View>
      <TouchableOpacity>
        <AntDesign
          onPress={onPlusPressed}
          name="pluscircleo"
          size={30}
          color="royalblue"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FoodListItem;

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
