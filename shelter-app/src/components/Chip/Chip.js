import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "../../ThemeContext";

import { Chip } from "./Chip.style";

import Search from "@material-ui/icons/Search";

const ChipWrapper = ({ label, prop, handleDelete }) => {
  const theme = useTheme();
  const handleChipDelete = () => {
    handleDelete(label, prop);
  };

  return (
    <Chip
      icon={<Search />}
      theme={theme.palette}
      size="small"
      label={label}
      onDelete={handleChipDelete}
      color="primary"
    />
  );
};

ChipWrapper.propTypes = {
  label: PropTypes.string,
  prop: PropTypes.string,
  handleDelete: PropTypes.func
};

export default ChipWrapper;
