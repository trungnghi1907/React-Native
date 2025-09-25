import React from "react";
import { TouchableOpacity, View } from "react-native";
import TextComponent from "./Text";
import { globalStyles } from "../styles/globalStyles";

const Button = (props) => {
  const {
    icon,
    text,
    textColor,
    color,
    styles,
    onPress,
    disable,
    textStyles,
    textFont,
    weight,
    iconFlex,
    textSize,
  } = props;
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        disable={disable}
        onPress={onPress}
        style={[
          globalStyles.button,
          {
            backgroundColor: color,
            width: "100%",
          },
          styles,
        ]}
      >
        {icon && iconFlex === "left" && icon}
        <TextComponent
          text={text}
          color={textColor}
          font={textFont}
          size={textSize}
          styles={textStyles}
          fontWeight={weight}
        />
        {icon && iconFlex === "right" && icon}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
