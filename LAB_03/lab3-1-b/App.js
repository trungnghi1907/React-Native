import React, { useState } from "react";
import {SafeAreaView,View,Text,TextInput,Pressable,StyleSheet,StatusBar,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient
        colors={["#E6FAFF", "#D4F6FF", "#00CFFF"]}
        locations={[0, 0.6, 1]}
        style={StyleSheet.absoluteFill}
      />

      <LinearGradient
        colors={["#FFFFFF00", "#00BEEA", "#00CFFF"]}
        locations={[0, 0.5, 1]}
        style={styles.bottomBand}
      />

      <View style={styles.container}>
        {/* Icon ổ khoá */}
        <View style={styles.lockWrap}>
          <Ionicons name="lock-closed" size={96} color="#000" />
        </View>

        {/* Tiêu đề */}
        <View style={styles.titleWrap}>
          <Text style={styles.title}>FORGET</Text>
          <Text style={styles.title}>PASSWORD</Text>
        </View>

        {/* Mô tả */}
        <Text style={styles.desc}>
          Provide your account’s email for which you{"\n"}
          want to reset your password
        </Text>

        {/* Ô nhập mail */}
        <View style={styles.inputRow}>
          <Ionicons name="mail-outline" size={20} color="#555" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#555"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* button Next */}
        <Pressable
          onPress={() => console.log("NEXT", email)}
          style={({ pressed }) => [
            styles.btn,
            pressed && { transform: [{ scale: 0.98 }] },
          ]}
          android_ripple={{ color: "#00000022" }}
        >
          <Text style={styles.btnText}>NEXT</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

/* ===== Design Tokens ===== */
const T = {
  sp: 16,
  radius: 12,
  text: "#000",
  btn: "#E5B700",
  inputBg: "#CFCFD1", 
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#E6FAFF" },
  container: {
    flex: 1,
    paddingHorizontal: T.sp * 1.2,
    paddingTop: T.sp * 2,
    paddingBottom: T.sp * 1.2,
    gap: 14,
  },

  bottomBand: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
  },

  lockWrap: { alignItems: "center", marginTop: T.sp },
  titleWrap: { alignItems: "center", marginTop: 6 },
  title: {
    color: T.text,
    fontSize: 26,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  desc: {
    color: T.text,
    fontSize: 13.5,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 19,
    marginTop: 8,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: T.inputBg,
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 48,
    gap: 8,
    marginTop: 8,
  },
  input: {
    flex: 1,
    color: "#111",
    fontSize: 14,
  },

  btn: {
    backgroundColor: T.btn,
    borderRadius: T.radius,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    elevation: 1,
  },
  btnText: { color: "#000", fontSize: 16, fontWeight: "900" },
});
