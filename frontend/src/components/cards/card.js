import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import defaultImage from "../../images/sports.jpg"; // Tell webpack this JS file uses this image

const useStyles = makeStyles({
  root: {
    height: "100%",
    "&:hover  .MuiCardActions-root": {
      visibility: "initial"
    }
  },
  media: {
    height: 140
  },
  cardActions: {
    visibility: "hidden"
  }
});

export default function CardSport(props) {
  const classes = useStyles();
  const { name, description, id, imageUrl, createdAt } = props.card;

  const editCard = e => {
    e.preventDefault();
    props.openEditModal({ name, description, id, imageUrl, createdAt });
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageUrl ? imageUrl : defaultImage}
        title="Card Media Sport"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          onClick={() => {
            props.deleteCard(props.card);
          }}
          color="secondary"
        >
          Delete card
        </Button>
        <Button onClick={editCard} color="primary">
          Edit card
        </Button>
      </CardActions>
    </Card>
  );
}
