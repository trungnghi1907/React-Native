import React from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Logo vòng tròn */}
        <View style={styles.logoWrap}>
          <View style={styles.logoCircle} />
        </View>

        {/* Tiêu đề và mô tả */}
        <View style={styles.textBlock}>
          <Text style={styles.titleLine}>GROW</Text>
          <Text style={styles.titleLine}>YOUR BUSINESS</Text>

          <Text style={styles.subtitle}>
            We will help you to grow your business using{"\n"}online server
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <Pressable
            style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
            onPress={() => console.log("LOGIN")}
            android_ripple={{ color: "#00000022" }}
          >
            <Text style={styles.btnText}>LOGIN</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
            onPress={() => console.log("SIGN UP")}
            android_ripple={{ color: "#00000022" }}
          >
            <Text style={styles.btnText}>SIGN UP</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

/* ===== Design tokens ===== */
const TOKENS = {
  bg: "#00CFFF",    
  text: "#000000",  
  btnBg: "#E5B700", 
  radius: 14,
  spacing: 16,
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: TOKENS.bg },
  container: {
    flex: 1,
    paddingHorizontal: TOKENS.spacing,
    paddingTop: TOKENS.spacing * 2,
    paddingBottom: TOKENS.spacing,
    justifyContent: "space-between", 
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
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 20,
  },

  // buttons
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: TOKENS.spacing,
  },
  btn: {
    backgroundColor: TOKENS.btnBg,
    borderRadius: TOKENS.radius,
    minWidth: 130,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    // chỉnh shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  btnPressed: { transform: [{ scale: 0.98 }] },
  btnText: { color: TOKENS.text, fontSize: 16, fontWeight: "800", letterSpacing: 0.5 },
});
