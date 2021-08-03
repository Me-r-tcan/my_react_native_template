import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import PropType from "prop-types";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function AppButton({
  title,
  onPress,
  color = "primary",
  fontSize = defaultStyles.fontSize.medium,
  textColor = "white",
  width = "100%",
  textStyle,
  buttonStyle,
  height,
  icon,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: defaultStyles.colors[color],
          width: width,
          height: height,
        },
        buttonStyle,
      ]}
      onPress={onPress}
    >
      <AppText
        style={[
          styles.text,
          { color: defaultStyles.colors[textColor] },
          { fontSize: fontSize },
          textStyle,
        ]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 25,
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontFamily: defaultStyles.fontFamily.bold,
    alignSelf: "center",
  },
});

AppButton.propTypes = {
  title: PropType.string.isRequired,
  onPress: PropType.func.isRequired,
  color: PropType.string,
  width: PropType.string,
};

export default AppButton;
