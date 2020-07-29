import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { v4 as uuidv4 } from "uuid";

function CreateModal(props) {
  const { onClose, onAdd } = props;

  const [cardForm, setCardForm] = React.useState({
    name: "",
    description: "",
    id: uuidv4(),
    createdAt: null
  });

  const [errorRequiredName, setErrorRequiredName] = React.useState(false);
  const [
    errorRequiredDescription,
    setErrorRequiredDescription
  ] = React.useState(false);

  const handleClose = () => {
    onClose();
  };

  const validateForm = cardForm => {
    if (!cardForm.name) {
      setErrorRequiredName(true);
    } else {
      setErrorRequiredName(false);
    }
    if (!cardForm.description) {
      setErrorRequiredDescription(true);
    } else {
      setErrorRequiredDescription(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    validateForm(cardForm);
    if (cardForm.name && cardForm.description) {
      onAdd(cardForm);
    }
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setCardForm({
      ...cardForm,
      [evt.target.name]: value
    });
  }

  return (
    <div>
      <Dialog open onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Card</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            name="name"
            value={cardForm.name}
            required
            fullWidth
            onChange={handleChange}
            error={errorRequiredName}
            helperText="Name is required"
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            name="description"
            value={cardForm.description}
            required
            fullWidth
            onChange={handleChange}
            error={errorRequiredDescription}
            helperText="Description is required"
          />
          <TextField
            margin="dense"
            id="image"
            label="Image URL"
            type="text"
            name="imageUrl"
            value={cardForm.imageUrl}
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Card
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateModal;
