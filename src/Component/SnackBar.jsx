
import { Box, Snackbar, Alert, styled } from '@mui/material';

const MuiAlert = styled(Alert)`
    color: black;
    padding: 50px;
    background-color: white;
`;

const SnackBar = ({ open, setOpen }) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
       setOpen(false);
    };

    return (
        <Box>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <MuiAlert severity="info" onClose={handleClose}>
                    Number of Images should be between 3 and 200
                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default SnackBar;