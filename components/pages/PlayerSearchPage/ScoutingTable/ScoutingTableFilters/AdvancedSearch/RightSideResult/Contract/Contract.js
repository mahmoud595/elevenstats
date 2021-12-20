import { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { ResultWrapper } from "../ResultWrapper/ResultWrapper";
import Typography from "@mui/material/Typography";

export const Contract = () => {
  const [value, setValue] = useState(null);
  return (
    <ResultWrapper title="contract">
      <Typography
        variant="h2"
        fontWeight="500"
        marginTop="22px"
        fontSize="11px"
        color="#677F98"
      >
        Expiration date
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                width: "200px",
                marginTop: "12px",
                "& .MuiInputBase-input": {
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "9px 14px",
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </ResultWrapper>
  );
};
