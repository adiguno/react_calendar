import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// type birthDayProps = {
//   setBirthDay: (date: number) => void;
// };
// { setBirthDay }: birthDayProps

type FeedbackDialogState = {
  open: boolean;
  onClose: () => void;
};
export default function FeedbackDialog({ open, onClose }: FeedbackDialogState) {
  // const [open, setOpen] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    // setOpen(false);
    onClose();
  };

  const handleSubmit = () => {
    // todo: send feedback to firestore
    // setOpen(false);
    onClose();
  };

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      setEmail(e.target.value);
    }
  }
  function handleFeedbackChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      setFeedback(e.target.value);
    }
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        I'm just a solo dev go easy on me
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Give us (me) some feedback</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            variant="standard"
            id="email"
            label="Email"
            defaultValue={""}
            // value={month === 0 ? undefined : month}
            // onChange={handleMonthChange}
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            autoFocus
            margin="dense"
            variant="standard"
            id="feedback"
            label="Feedback"
            value={feedback}
            onChange={handleFeedbackChange}
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
