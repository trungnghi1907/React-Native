import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

export default function Seat({ number, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.box,
        { backgroundColor: active ? "#ef4444" : "#22c55e" }, 
        pressed && { transform: [{ scale: 0.98 }] },
      ]}
    >
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{number}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 56,
    height: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: "rgba(0,0,0,0.15)",
    borderRadius: 6,
  },
  badgeText: { color: "#fff", fontWeight: "900" },
});