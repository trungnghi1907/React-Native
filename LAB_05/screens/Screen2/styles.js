import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    // paddingVertical: 20,
    flex: 1,
  },
  image: {
    width: 160,
    height: 200,
    objectFit: "cover",
    borderRadius: 10,
  },
  content: { flex: 2 },
  flexRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  imgStart: {
    width: 18,
    height: 18,
  },
  marginTop: {
    marginTop: 10,
  },
  textDecorationLine: {
    textDecorationLine: "line-through",
    marginLeft: 14,
  },
  helpBtn: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  helpIcon: {
    width: 20,
    height: 20,
  },
  rightcon: {
    width: 10,
    height: 10,
  },
  pickColorBtn: {},
  boxShadow: {
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  pickColorBtn: {
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.46)",
    padding: 6,
  },
  btnBuy: {
    borderRadius: 14,
    paddingVertical: 10,
    marginTop: 20,
  },
  bgColor: {
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  groupColor: {
    marginTop: 13,
    gap: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  colorBtn: {
    width: 70,
    height: 70,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
});
