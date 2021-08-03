import React from "react";
import PropType from "prop-types";

import { useFormikContext } from "formik";

import AppButton from "../elements/AppButton";

const SubmitButton = ({
  title,
  color = "primary",
  width = "100%",
  ...otherProps
}) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      color={color}
      width={width}
      onPress={handleSubmit}
      {...otherProps}
    />
  );
};

SubmitButton.propTypes = {
  title: PropType.string.isRequired,
  color: PropType.string,
  width: PropType.string,
};

export default SubmitButton;
