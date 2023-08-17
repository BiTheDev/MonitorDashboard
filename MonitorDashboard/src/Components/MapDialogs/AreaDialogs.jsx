import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Paper,
  Grid,
  Typography
} from "@mui/material";
import GaugeChart from "../Chart/GaugeChart";

const AreaDialog = ({ open, area, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle>{area?.title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5">
              Access Point Information:
            </Typography>
            <Typography>
              Access Point Name: {area?.accessPoint.name}
            </Typography>
            <Typography>
              Health Status: {area?.accessPoint.status}
            </Typography>
            <Typography>
              Connected Devices: {area?.accessPoint.connectedDevices}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ borderRadius: '15px', padding: '10px' }}>
              <GaugeChart
                initialTitle={"BandWidth"}
                initialValue={area?.accessPoint.bandwidth}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
              <GaugeChart
                initialTitle={"latency"}
                initialValue={area?.accessPoint.latency}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
              <GaugeChart
                initialTitle={"jitter"}
                initialValue={area?.accessPoint.jitter}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
              <GaugeChart
                initialTitle={"availability"}
                initialValue={area?.accessPoint.availability}
              />
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AreaDialog;
