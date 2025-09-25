import React, { useState } from "react";
import {
  Pressable,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  Text,
} from "react-native";
import { styles } from "./styles";
import TextComponent from "../../components/Text";
import Button from "../../components/Button";

const Screen2 = ({ navigation, route }) => {
  const { indexImage, product } = route.params;

  const [colorSelected, setColorSelected] = useState(indexImage);

  const handleSelectedColor = (color) => {
    setColorSelected(color);
  };

  const handleBack = () => {
    navigation.navigate("Screen1", { indexImage: colorSelected });
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.flexRow]}>
        <Image
          style={styles.image}
          source={
            product.colors[colorSelected ?? product.colors.length - 1].image
          }
        />
        <View>
          <TextComponent
            text={product.name}
            weight={400}
            styles={{ width: 200, textAlign: "start", marginTop: 10 }}
          />
          {Number.isInteger(colorSelected) && (
            <View style={{ marginTop: 6, flex: 1, gap: 10 }}>
              <TextComponent
                text={`Màu: ${product.colors[colorSelected].name}`}
                styles={{ textAlign: "start" }}
              />
              <TextComponent
                text={`Cung cấp bởi: ${product.supplier}`}
                styles={{ textAlign: "start" }}
              />
              <TextComponent
                text={product.price}
                styles={{ textAlign: "start" }}
              />
            </View>
          )}
        </View>
      </View>

      <View style={styles.bgColor}>
        <TextComponent
          styles={[styles.marginTop, { textAlign: "start" }]}
          text={" Chọn một màu bên dưới:"}
        />
        <View style={[styles.groupColor]}>
          {product.colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorBtn,
                {
                  backgroundColor: color.color,
                },
              ]}
              onPress={() => handleSelectedColor(index)}
            />
          ))}
        </View>
        <Button
          text={"XONG"}
          color={"#1952E294"}
          textColor={"#F9F2F2"}
          textSize={18}
          styles={[styles.marginTop, styles.btnBuy]}
          onPress={handleBack}
        />
      </View>
    </View>
  );
};

export default Screen2;
