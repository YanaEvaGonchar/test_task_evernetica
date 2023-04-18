import React from 'react';
import styled from 'styled-components';
import { TextField, Button, Box } from '@material-ui/core';

const SearchField = styled(TextField)`
  && {
    margin-right: 10px;
    width: 300px;
  }
`;

const ResetButton = styled(Button)`
  && {
    background-color: #f44336;
    color: #fff;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

export const SearchBar = ({ value, onChange, onReset }) => {
  const handleReset = () => {
    onReset();
  };

  return (
    <Box display="flex" marginBottom="30px" justifyContent="center" alignItems="center">
      <SearchField
        label="Search"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
      <ResetButton variant="contained" onClick={handleReset}>
        RESET
      </ResetButton>
    </Box>
  );
};
