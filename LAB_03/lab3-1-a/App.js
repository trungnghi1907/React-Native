
import React from "react";
import {SafeAreaView,View,Text,Pressable,StyleSheet,StatusBar} 
from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      {/* Màu nền chính */}
      <LinearGradient
        colors={["#E6FAFF", "#D4F6FF", "#00CFFF"]}
        locations={[0, 0.6, 1]}
        style={StyleSheet.absoluteFill}
      />

      {/* Nền xanh overlay */}
      <LinearGradient
        colors={["#FFFFFF00", "#00BEEA", "#00CFFF"]}
        locations={[0, 0.5, 1]}
        style={styles.bottomBand}
      />

      <View style={styles.container}>
        {/* Logo tròn */}
        <View style={styles.logoWrap}>
          <View style={styles.logoCircle} />
        </View>

        {/* Tiêu đề + mô tả */}
        <View style={styles.textBlock}>
          <Text style={styles.titleLine}>GROW</Text>
          <Text style={styles.titleLine}>YOUR BUSINESS</Text>

          <Text style={styles.subtitle}>
            We will help you to grow your business using{"\n"}online server
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <Pressable style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
            <Text style={styles.btnText}>LOGIN</Text>
          </Pressable>

          <Pressable style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
            <Text style={styles.btnText}>SIGN UP</Text>
          </Pressable>
        </View>

        {/* Link cuối trang */}
        <Pressable style={styles.howWrap} onPress={() => {}}>
          <Text style={styles.howText}>HOW WE WORK?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

/* ===== Design tokens ===== */
const TOKENS = {
  text: "#000000",
  btnBg: "#E5B700",
  radius: 12,
  spacing: 16,
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#E6FAFF" },
  container: {
    flex: 1,
    paddingHorizontal: TOKENS.spacing * 1.2,
    paddingTop: TOKENS.spacing * 2,
    paddingBottom: TOKENS.spacing,
    justifyContent: "space-between",
  },

  // Dải gradient
  bottomBand: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
  },

  // logo
  logoWrap: { alignItems: "center", marginTop: TOKENS.spacing * 2 },
  logoCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 14,
    borderColor: TOKENS.text,
  },

  // text
  textBlock: { alignItems: "center", paddingHorizontal: TOKENS.spacing },
  titleLine: {
    color: TOKENS.text,
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: 0.8,
    lineHeight: 30,
  },
  subtitle: {
    marginTop: TOKENS.spacing,
    color: TOKENS.text,
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 20,
  },

  // buttons
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: TOKENS.spacing,
  },
  btn: {
    backgroundColor: TOKENS.btnBg,
    borderRadius: TOKENS.radius,
    minWidth: 130,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnPressed: { transform: [{ scale: 0.98 }] },
  btnText: { color: TOKENS.text, fontSize: 16, fontWeight: "800" },

  // Dòng chữ HOW WE WORK
  howWrap: { alignItems: "center", marginBottom: TOKENS.spacing * 0.5 },
  howText: { color: TOKENS.text, fontWeight: "800", letterSpacing: 0.5 },
});
