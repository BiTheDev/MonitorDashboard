import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import GaugeChart from "../Chart/GaugeChart";

const AreaDialog = ({ open, area, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{area?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Access Point Name: {area?.accessPoint.name}
          Health Status : {area?.accessPoint.status}
          connectedDevices : {area?.accessPoint.connectedDevices}
        </DialogContentText>
        <GaugeChart initialTitle={"Latency"} initialValue={area?.accessPoint.latency} />
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
