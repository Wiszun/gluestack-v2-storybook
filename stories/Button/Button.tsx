// import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export type MyButtonProps = {
  onPress: () => void;
  text: string;
};

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <Button
      onPress={onPress}
      // className="px-[16px] py-[8px] bg-purple-600 rounded-md"
    >
      <Text className=" text-white">{text}</Text>
    </Button>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     backgroundColor: "purple",
//     borderRadius: 8,
//   },
//   text: { color: "white" },
// });
