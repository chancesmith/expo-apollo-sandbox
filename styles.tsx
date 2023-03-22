import { TextStyle, ViewStyle } from "react-native";

export const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: "#222",
  alignItems: "center",
  justifyContent: "center",
};

export const TEXT: TextStyle = { color: "white", fontSize: 20 };

export const HEADING: TextStyle = {
  ...TEXT,
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: 5,
};
