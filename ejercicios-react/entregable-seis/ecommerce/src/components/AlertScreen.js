import React from 'react';
import Alert from '@mui/material/Alert';

const AlertScreen = ({ message, severity }) => {
    return (
        <div>
            <Alert severity={severity}>
                { message }
            </Alert>
        </div>
    );
}

export default AlertScreen;