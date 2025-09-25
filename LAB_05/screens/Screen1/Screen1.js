import React from "react";
import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";
import TextComponent from "../../components/Text";
import Button from "../../components/Button";

const Screen1 = ({ navigation, route }) => {
  const indexImage = route.params?.indexImage;

  const handleSelectColors = () =>
    navigation.navigate("Screen2", { indexImage, product });

  const product = {
    name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
    reviewCount: 828,
    price: "1.790.000",
    oldPrice: "1.790.000",
    image: [],
    supplier: "Tiki Tradding",
    colors: [
      {
        name: "bạc",
        color: "rgba(197, 241, 251, 1)",
        image: require("../../assets/vs_silver.png"),
      },
      {
        name: "đỏ",
        color: "rgba(243, 13, 13, 1)",
        image: require("../../assets/vs_red.png"),
      },
      {
        name: "đen",
        color: "rgba(0, 0, 0, 1)",
        image: require("../../assets/vs_black.png"),
      },
      {
        name: "xanh",
        color: "rgba(35, 72, 150, 1)",
        image: require("../../assets/vs_blue.png"),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Image
        source={product.colors[indexImage ?? product.colors.length - 1].image}
        style={styles.image}
      />
      <View style={[styles.content, styles.marginTop]}>
        <TextComponent
          text={"Điện Thoại Vsmart Joy 3 - Hàng chính hãng"}
          weight={600}
          styles={{ textAlign: "start" }}
        />
        <View style={[styles.flexRow, styles.marginTop, { gap: 5 }]}>
          {new Array(5).fill(null).map((item, index) => (
            <Image
              key={index}
              style={styles.imgStart}
              source={require("../../assets/Star.png")}
            />
          ))}
          <TextComponent
            text={"(Xem 828 đánh giá)"}
            size={14}
            weight={400}
            styles={{ marginLeft: 10 }}
          />
        </View>

        <View
          style={[
            styles.marginTop,
            styles.flexRow,
            { gap: 20, textAlign: "center" },
          ]}
        >
          <TextComponent text={"1.790.000 đ"} size={16} />
          <TextComponent
            text={"1.790.000 đ"}
            size={14}
            weight={400}
            styles={styles.textDecorationLine}
          />
        </View>

        <View style={[styles.marginTop, styles.flexRow]}>
          <TextComponent
            text={"Ở ĐÂU RẺ HƠN HOÀN TIỀN"}
            color={"#FA0000"}
            size={14}
            weight={400}
          />
          <Pressable style={styles.helpBtn}>
            <Image
              style={styles.helpIcon}
              source={require("../../assets/help.png")}
            />
          </Pressable>
        </View>

        <Pressable
          style={[styles.marginTop, styles.flexRow, styles.pickColorBtn]}
          onPress={handleSelectColors}
        >
          <TextComponent
            text={product.colors.length + " MÀU-CHỌN MÀU"}
            size={14}
            weight={400}
          />
          <Image
            style={styles.rightcon}
            source={require("../../assets/rightIcon.png")}
          />
        </Pressable>

        <Button
          text={"CHỌN MUA"}
          color={"#CA1536"}
          textColor={"#F9F2F2"}
          textSize={18}
          styles={[styles.marginTop, styles.btnBuy]}
        />
      </View>
    </View>
  );
};

export default Screen1;
