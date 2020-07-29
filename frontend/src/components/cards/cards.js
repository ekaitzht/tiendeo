import React from "react";
import Card from "./card";
import sortCardsBy from "./sortCards";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Cards(props) {
  const { cards, openEditModal, deleteCard, sortParameter } = props;

  let cardsSorted = sortCardsBy(cards, sortParameter);

  React.useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  if (cardsSorted.length === 0) {
    return (
      <Typography variant="overline" display="block" gutterBottom>
        You don't have any card, please add new card.
      </Typography>
    );
  }

  return (
    <Grid container direction="row" justify="flex-start" alignItems="stretch">
      {cardsSorted.map(card => (
        <Grid key={card.id} item xs={12} sm={4} md={4}>
          <Card
            card={card}
            openEditModal={openEditModal}
            deleteCard={deleteCard}
          ></Card>
        </Grid>
      ))}
    </Grid>
  );
}
