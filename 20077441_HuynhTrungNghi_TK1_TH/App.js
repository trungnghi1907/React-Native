import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";
import SeatGrid from "./components/SeatGrid";

export default function App() {

  const [customer, setCustomer] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Tên khách:</Text>
        <TextInput
          value={customer}
          onChangeText={setCustomer}
          placeholder="Nhập tên khách…"
          placeholderTextColor="#9AA0A6"
          style={styles.input}/>

      <View style={styles.screenBox}>
        <Text style={styles.screenText}>MÀN HÌNH</Text>
      </View>
      </View>

     
      <SeatGrid rows={4} cols={5} />

     
      <View style={styles.legend}>
        <Legend color="#22c55e" label="Còn trống" />
        <Legend color="#ef4444" label="Đã đặt" />
      </View>
    </SafeAreaView>
  );
}

const Legend = ({ color, label }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
    <View style={{ width: 18, height: 18, borderRadius: 4, backgroundColor: color }} />
    <Text>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F6F7F9", padding: 16, gap: 16 },
  screenBox: {
    height: 60,
    borderRadius: 12,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
  },
  screenText: { fontWeight: "900", letterSpacing: 1 },
  infoRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  label: { fontWeight: "700" },
  input: {
    flex: 1,
    height: 42,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  legend: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 8,
    marginTop: 4,
  },
});