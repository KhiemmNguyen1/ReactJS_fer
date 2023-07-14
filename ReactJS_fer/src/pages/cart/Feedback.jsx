import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSendFeedback = () => {
    if (feedback !== "") {
      setOpen(true);
      setSuccess(true);
    }
  };
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </Stack>
      <TextField
        fullWidth
        label="Viết feedback ..."
        id="fullWidth"
        value={feedback}
        onChange={handleFeedbackChange}
      />

      <Button
        disabled={feedback === ""}
        variant="outlined"
        onClick={handleSendFeedback}
      >
        GỬI
      </Button>
      <Collapse in={open}>
        <Alert
          severity={success ? "success" : "error"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {success ? "Successfully!" : "Error sending feedback!"}
        </Alert>
      </Collapse>
    </Box>
  );
}
