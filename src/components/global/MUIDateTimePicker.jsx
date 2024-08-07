import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

const MUIDateTimePicker = ({ label, date, setDate, maxDate, minDate }) => {
  return (
    <div className="date-picker" style={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label={label}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                // svg: { color: "#460073" },
                // input: { color: "#460073" },
                // label: { color: "#460073" },
                width: { width: "100%" },
              }}
            />
          )}
          value={date}
          onChange={(value) => setDate(value)}
          maxDate={maxDate !== null ? maxDate : new Date("2100-01-01")}
          minDate={minDate !== null ? minDate : new Date("1900-01-01")}
        ></DateTimePicker>
      </LocalizationProvider>
    </div>
  );
};

export default MUIDateTimePicker;