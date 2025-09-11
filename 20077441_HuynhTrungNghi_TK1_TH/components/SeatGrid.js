import React, { useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import Seat from "./Seat";

export default function SeatGrid({ rows = 4, cols = 5 }) {
  const total = rows * cols;
  const [taken, setTaken] = useState(Array(total).fill(false));
  const seats = useMemo(() => Array.from({ length: total }, (_, i) => i + 1), [total]);

  const toggleSeat = (index) => {
    setTaken((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <View style={styles.wrap}>
      {seats.map((n, i) => (
        <Seat
          key={n}
          number={n}
          active={taken[i]}
          onPress={() => toggleSeat(i)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignSelf: "center",
    width: 5 * 64,              
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,                      
    justifyContent: "center",
    paddingVertical: 8,
  },
});