import React from "react";
import { StyleSheet } from "react-native";
import PropType from "prop-types";

import AppText from "../elements/AppText";
import defaultStyles from "../config/styles";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: { color: defaultStyles.colors.danger },
});

ErrorMessage.propTypes = {
  error: PropType.string,
};

export default ErrorMessage;
