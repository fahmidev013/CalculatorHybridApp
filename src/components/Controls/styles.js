import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    backgroundColor: "#000000",
    padding: "1%",
  },
  pretender: {
    backgroundColor: "#000000",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative"
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: "23%",
    margin: "1%"
  },
  double: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "10%",
    margin: "1%",
    width: "48%",
  },
  black: {
    backgroundColor: '#333333',
    borderRadius: 100,
    height: 65
  },
  grey: {
    backgroundColor: '#a6a6a6',
    borderRadius: 100,
    height: 65
  },
  orange: {
    backgroundColor: '#ff9500',
    borderRadius: 100,
    height: 65
  },
  operatorBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9500',
    borderRadius: 100,
    height: 65
  }

});

export default styles;
