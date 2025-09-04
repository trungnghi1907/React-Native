import React, { useRef, useState } from "react";
import {SafeAreaView,View,Text,TextInput,Pressable,StyleSheet,StatusBar,Alert,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const phoneOrEmail = "++849092605798"; 
  const refs = useRef(Array.from({ length: 6 }, () => React.createRef()));
  const [digits, setDigits] = useState(Array(6).fill(""));

  const setAt = (i, v) => {
    const nxt = [...digits];
    nxt[i] = v.replace(/[^0-9]/g, "").slice(0, 1);
    setDigits(nxt);
  };

  const code = digits.join("");
  const canSubmit = code.length === 6;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      {/* Nền gradient */}
      <LinearGradient
        colors={["#E6FAFF", "#D4F6FF", "#00CFFF"]}
        locations={[0, 0.6, 1]}
        style={StyleSheet.absoluteFill}
      />
      {/* Dải gradient*/}
      <LinearGradient
        colors={["#FFFFFF00", "#00BEEA", "#00CFFF"]}
        locations={[0, 0.5, 1]}
        style={styles.bottomBand}
      />

      <View style={styles.container}>
        <Text style={styles.titleBig}>CODE</Text>
        <Text style={styles.titleSub}>VERIFICATION</Text>

        <Text style={styles.desc}>
          Enter ontime password sent on{"\n"}
          {phoneOrEmail}
        </Text>

        {/* 6 ô OTP */}
        <View style={styles.otpRow}>
          {digits.map((d, i) => (
            <TextInput
              key={i}
              ref={refs.current[i]}
              value={d}
              onChangeText={(v) => {
                setAt(i, v);
                if (v && i < 5) refs.current[i + 1]?.current?.focus();
              }}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace" && !digits[i] && i > 0) {
                  refs.current[i - 1]?.current?.focus();
                }
              }}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.otpBox}
            />
          ))}
        </View>

        {/* Nút VERIFY CODE */}
        <Pressable
          onPress={() =>
            canSubmit ? Alert.alert("Code", code) : null
          }
          style={({ pressed }) => [
            styles.btn,
            !canSubmit && { opacity: 0.6 },
            pressed && canSubmit && { transform: [{ scale: 0.98 }] },
          ]}
          android_ripple={{ color: "#00000022" }}
        >
          <Text style={styles.btnText}>VERIFY CODE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const BOX = 48;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#E6FAFF" },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 28,
    paddingBottom: 16,
    gap: 16,
  },
  bottomBand: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
  },

  titleBig: {
    fontSize: 40,
    fontWeight: "900",
    color: "#000",
    letterSpacing: 0.5,
    marginTop: 8,
  },
  titleSub: {
    fontSize: 16,
    fontWeight: "900",
    color: "#000",
    letterSpacing: 1,
  },
  desc: {
    textAlign: "center",
    color: "#111",
    fontWeight: "700",
    lineHeight: 20,
    marginTop: 4,
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 6,
  },
  otpBox: {
    width: BOX,
    height: BOX,
    backgroundColor: "#EAF9FD",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    color: "#111",
  },

  btn: {
    backgroundColor: "#E5B700",
    alignSelf: "stretch",
    height: 54,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },
  btnText: { color: "#000", fontSize: 16, fontWeight: "900", letterSpacing: 0.5 },
});
