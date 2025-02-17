import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import { InfoOutlined } from "@mui/icons-material";

const HINTS = [
    "es algo que eres",
    "es tu apodo favorito",
    "empieza con b",
    "eres mi..."
];

const SecretModal = ({ open, handleOpen, checkSecret }) => {
    const [secret, setSecret] = useState("");
    const [hintIndex, setHintIndex] = useState(0);

    useState(() => {
        const interval = setInterval(() => {
            setHintIndex((prev) => (prev + 1) % HINTS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Dialog
            open={open}
        >
            <DialogTitle>🔒 Inserta la palabra secreta</DialogTitle>
            <DialogContent>
                <TextField
                    sx={{
                        my: 2,
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#F28599", // Color del borde cuando está enfocado
                            },
                        },
                        "& .MuiInputLabel-root": {
                            "&.Mui-focused": {
                                color: "#F28599", // Color del label cuando está enfocado
                            },
                        },
                    }}
                    fullWidth
                    label="Palabra Secreta"
                    variant="outlined"
                    value={secret}
                    onChange={(e) => setSecret(e.target.value)}
                />
                <Button
                    variant="contained"
                    sx={{
                        display: 'block',
                        margin: 'auto',
                        bgcolor: '#F28599',
                    }}
                    onClick={() => checkSecret(secret)}
                >
                    Verificar
                </Button>
                <Box sx={{
                    mt: 2,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    bgcolor: '#F2D5BB',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: 'fit-content',
                }}>
                    <InfoOutlined sx={{ fontSize: 20 }} />
                    <Typography
                        variant="body2"
                        sx={{
                            width: '100%'
                        }}
                    >
                        {HINTS[hintIndex]}
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default SecretModal;