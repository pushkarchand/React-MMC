import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function MaxWidthDialog(props) {
  const [open, setOpen] = React.useState(props.isOpen);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('md');

  React.useEffect(()=>{
    setOpen(props.isOpen)
  },[props.isOpen])


  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={props.closeDialog}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
            {props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}