import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [year, setYear] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(`form submitted: ${month} - ${day} - ${year}`);
    setOpen(false);
  };

  function handleMonthChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(`new month: ${e.target.value}`);
    if (Number(e.target.value)) {
      setMonth(Number(e.target.value));
    }
  }
  function handleDayChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(`new day: ${e.target.value}`);
    if (Number(e.target.value)) {
      setDay(Number(e.target.value));
    }
  }
  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(`new year: ${e.target.value}`);
    if (Number(e.target.value)) {
      setYear(Number(e.target.value));
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        What's Your Birthday?
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>What's Your Birthday?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            variant="standard"
            id="month"
            label="Month"
            defaultValue={undefined}
            value={month === 0 ? undefined : month}
            onChange={handleMonthChange}
          />
          <TextField
            autoFocus
            margin="dense"
            variant="standard"
            id="day"
            label="Day"
            onChange={handleDayChange}
          />
          <TextField
            autoFocus
            margin="dense"
            variant="standard"
            id="year"
            label="Year"
            onChange={handleYearChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
