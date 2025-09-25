import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const Input = (props) => {
  const {
    value,
    onChange,
    affix,
    suffix,
    placeholder,
    isPassword,
    numberOfLine,
    styles,
    styleText,
  } = props;

  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <View style={[globalStyles.inputContainer, styles]}>
      {affix ?? affix}
      <TextInput
        style={[
          globalStyles.text,
          {
            paddingHorizontal: affix || suffix ? 14 : 12,
          },
          styleText,
        ]}
        value={value}
        numberOfLines={numberOfLine}
        placeholder={placeholder ?? ""}
        onChangeText={(val) => onChange(val)}
        secureTextEntry={isShowPass}
        placeholderTextColor={"rgba(0, 0, 0, 1)"}
        autoCapitalize="none"
      />
      {/* {suffix ?? suffix} */}

      <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange("")
        }
      >
        {isPassword && (
          <Image
            source={require("../assets/help.png")}
            style={{ width: 30, height: 30 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Input;
