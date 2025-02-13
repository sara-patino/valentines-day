import { useState } from "react";
import SecretModal from "./components/SecretModal/SecretModal";
import { Alert, Typography, Container, Snackbar, Box } from "@mui/material";
import Envelope from "./components/Envelope/Envelope";

const ALERT_MESSAGES = [
  "nmms amor como no adivinaste?",
  "You shall not pass",
  "piensale un poquito más"
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
            Haz click en el sobre para abrir
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