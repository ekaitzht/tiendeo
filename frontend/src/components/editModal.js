import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function EditModal(props) {
  const { onClose, onEdit, card } = props;

  const handleClose = () => {
    onClose();
  };

  const [state, setState] = React.useState({
    ...card
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!state) return;
    onEdit(state);
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <div>
      <Dialog open onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Card</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            name="name"
            value={state.name}
            required
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            name="description"
            value={state.description}
            required
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="image"
            label="Image URL"
            type="text"
            name="imageUrl"
            value={state.imageUrl}
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditModal;
