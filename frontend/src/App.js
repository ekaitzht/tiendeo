import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Cards from "./components/cards/cards";
import CreateModal from "./components/createModal";
import EditModal from "./components/editModal";
import Radio from "./components/radio";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [cardEdit, setCardEdit] = useState({});
  const [sortParameter, setSortParameter] = useState("asc");

  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || [
      {
        name: "",
        description: "",
        id: "",
        imageUrl: ""
      }
    ]
  );

  const openCreateModal = e => {
    setOpen(true);
  };

  const closeCreateModal = e => {
    setOpen(false);
  };

  const addCard = card => {
    setCards(state => [...state, { ...card, createdAt: Date.now() }]);
    setOpen(false);
  };

  const editCard = card => {
    cards[cards.findIndex(c => c.id === card.id)] = card;
    localStorage.setItem("cards", JSON.stringify(cards));
    setCards(cards);
    setOpenEdit(false);
  };

  const closeEditModal = e => {
    setOpenEdit(false);
  };

  const openEditModal = card => {
    setOpenEdit(true);
    setCardEdit(card);
  };

  const deleteCard = card => {
    const newCards = cards.filter(c => {
      return c.id !== card.id;
    });
    setCards(newCards);
  };

  const sortByParameter = parameter => {
    setSortParameter(parameter);
  };

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box m={2}>
          <Radio sortBy={sortByParameter} />
          <Button variant="contained" onClick={openCreateModal}>
            Add card
          </Button>
        </Box>
        <Cards
          sortParameter={sortParameter}
          cards={cards}
          openEditModal={openEditModal}
          deleteCard={deleteCard}
        />
      </Grid>
      {open && (
        <CreateModal onClose={closeCreateModal} onAdd={addCard}></CreateModal>
      )}
      {openEdit && (
        <EditModal
          onClose={closeEditModal}
          onEdit={editCard}
          card={cardEdit}
        ></EditModal>
      )}
    </>
  );
}

export default App;
