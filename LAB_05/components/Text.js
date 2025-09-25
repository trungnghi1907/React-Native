import React from "react";
import { Text } from "react-native";

const TextComponent = (props) => {
  const { text, size, font, color, styles, numOfLine, weight } = props;

  return (
    <Text
      numberOfLines={numOfLine}
      style={[
        {
          color: color,
          fontSize: size ?? 16,
          fontFamily: font ?? "Roboto",
          fontWeight: weight ?? "bold",
          textAlign: "center",
        },
        styles,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
