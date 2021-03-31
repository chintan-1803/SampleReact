import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

function SimpleDialog(props) {
  const { open, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Hit on Play Button</DialogTitle>
      <video width="400" controls>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo(props) {
  const { open, onClose } = props;
  return (
    <div>
      <SimpleDialog open={open} onClose={onClose} />
    </div>
  );
}
