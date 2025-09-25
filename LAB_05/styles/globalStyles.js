import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  flexColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  marginTop: {
    marginTop: 40,
  },
  font: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  flexCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 150,
    objectFit: "cover",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderColor: "black",
    width: "100%",
    height: 50,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
 
});
