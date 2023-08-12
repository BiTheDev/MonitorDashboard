import React, {useState}from 'react'
import { Box, Typography } from '@mui/material';

const StatusBox = ({ initialStatusTitle, initialStatusText }) => {
  const [statusTitle,setStatusTitle] = useState(initialStatusTitle);
  const [statusText, setStatusText] = useState(initialStatusText);

  return (
    <Box m={2} p={2}>
        <Typography variant="subtitle1" align="center">{statusTitle}</Typography>
        <Typography variant="h6" align="center">{statusText}</Typography>
    </Box>
  )
}

export default StatusBox