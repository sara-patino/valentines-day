import { useState } from "react";
import SecretModal from "./components/SecretModal/SecretModal";
import { Alert, Typography, Container, Snackbar, Box } from "@mui/material";
import Envelope from "./components/Envelope/Envelope";

const ALERT_MESSAGES = [
  "Incorrect secret word",
  "Try again",
  "You shall not pass",
  "Ups! Incorrect",
  "Keep trying",
  "Come on....",
  "It a simple word",
  "Really?"
];

const App = () => {
  const [openModal, setOpenModal] = useState(true);
  const [accessGranted, setAccessGranted] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const secretWord = "bebesote";

  const checkSecret = (secret) => {
    if (secret.toLowerCase() === secretWord) {
      setAccessGranted(true);
      setOpenModal(false);
    } else {
      setOpenAlert(true);
    }
  };

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
    }}>
      <SecretModal
        open={openModal}
        handleOpen={() => setOpenModal(!openModal)}
        checkSecret={checkSecret}
      />

      {accessGranted && (
        <Box sx={{
          width: "100%",
        }}>
          <Envelope />
          <Typography sx={{mt: 2}} align="center">
            Click on the envelope to open it
          </Typography>
        </Box>
      )}

      <Snackbar
        sx={{
          mt: 5
        }}
        open={openAlert}
        autoHideDuration={3000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {openAlert && (
          <Alert severity="error" onClose={() => setOpenAlert(false)}>
            {ALERT_MESSAGES[Math.floor(Math.random() * ALERT_MESSAGES.length)]}
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default App;